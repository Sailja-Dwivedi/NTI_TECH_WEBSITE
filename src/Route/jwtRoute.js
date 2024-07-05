const express = require('express');
const verifyTokenrouter = express.Router();
const verifyToken = require('../midilwhere/verifyJWT'); // Assuming verifyToken.js is the file where you defined the middleware

// POST method route
verifyTokenrouter.post('/protectedRoute', verifyToken, (req, res) => {
    // If token is valid, this route will be accessed
    // You can use req.userId to access user ID or any other decoded information
    res.status(200).json({ message: 'Access granted' });
});

module.exports = { verifyTokenrouter };
