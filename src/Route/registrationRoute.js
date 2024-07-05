const express = require("express");
const bcrypt = require("bcrypt");
const { registrationModal } = require("../modal/registration");
const RegistrationRouter = express.Router();

RegistrationRouter.post('/registration', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if email already exists in database
        const existingUser = await registrationModal.findOne({ email: email });
        if (existingUser) {
            // If user with same email already exists, send error response
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const newUser = await registrationModal.create({ name, email, password: hashedPassword });
        console.log(newUser);
        res.status(201).json({ msg: "register" }); // Send the created user document as response
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = { RegistrationRouter };
