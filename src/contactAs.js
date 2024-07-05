const express = require("express");
const { check, validationResult } = require("express-validator");
const ContactRoute = express.Router(); // Use Router instead of creating a new instance of express
const Contact = require("./modal/contact_modal"); // Ensure the correct path to your model

// Validation and sanitization middleware
const validateContactForm = [
    check("name").trim().notEmpty().withMessage('Name is required').escape(),
    check("email").trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').normalizeEmail(),
    check("phone").trim().notEmpty().withMessage('Phone number is required').isMobilePhone().withMessage('Invalid phone number').escape(),
    check("message").trim().notEmpty().withMessage('Message is required').escape()
];

ContactRoute.post("/Contact", validateContactForm, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // If validation passes, create a new contact record
    const { name, email, phone, message } = req.body;
    try {
        // Create a new contact record
        const newContact = new Contact({ name, email, phone, message });

        // Save the contact record to the database
        await newContact.save();
        res.status(201).json({ message: "Contact form submitted successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = ContactRoute;
