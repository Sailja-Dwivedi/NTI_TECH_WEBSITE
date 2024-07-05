const jwt = require('jsonwebtoken');
require("dotenv/config");
const JWT_secret_key = process.env.JWT_SECRET_KEY;

function verifyToken(req, res, next) {
    // Get token from request headers

    const token = req.headers.authorization.split(" ")[1];

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    jwt.verify(token, JWT_secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        // If token is valid, save decoded data to request object for future use
        req.userId = decoded.userId;
        next();
    });
}

module.exports = verifyToken;
