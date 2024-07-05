const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registrationModal } = require("../modal/registration");
const LoginRouter = express.Router();
require("dotenv/config");
const JWT_secret_key = process.env.JWT_SECRET_KEY;


LoginRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if email exists in database
        const user = await registrationModal.findOne({ email: email });
        if (!user) {
            // If user with provided email does not exist, send error response
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare provided password with hashed password in database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            // If password is not valid, send error response
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // If email and password are valid, generate JWT token
        const token = jwt.sign({ userId: user._id, email }, JWT_secret_key, { expiresIn: '1h' });

        // Send token as response
        res.status(200).json({
            user,
            token: token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = { LoginRouter };
