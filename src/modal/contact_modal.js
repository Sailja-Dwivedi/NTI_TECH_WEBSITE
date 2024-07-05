const mongoose = require("../../config/db");

// Define schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true, // Assuming email should be unique
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
