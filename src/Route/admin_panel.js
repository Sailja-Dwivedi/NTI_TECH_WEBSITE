const express = require("express");
const path = require("path"); // Added path module
const Admin_pannel = express();

require("dotenv/config");
const username = process.env.ADMIN_USERNAME;
const password = process.env.ADMIN_PASSWORD;

Admin_pannel.use(express.json()); // Add middleware to parse JSON bodies

Admin_pannel.post("/Admin-login", (req, res) => {
    try {
        console.log('Received login request:', req.body); // Log received request


        if (req.body.username === username && req.body.password === password) {
            const dashboardPath = path.join(__dirname, "..", "..", "public", "dashborad.html");

            res.json({ success: true, message: "Login successful" });
            console.log("Login successful");
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
            console.log("Login failed: Invalid credentials");
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log("Login failed, error:", error);
    }
});

module.exports = { Admin_pannel };
