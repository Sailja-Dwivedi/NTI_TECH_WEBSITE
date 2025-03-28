const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const { mongoose } = require("../config/db");

const { LoginRouter } = require("./Route/LoginRoute");
const { verifyTokenrouter } = require("./Route/jwtRoute");
const { addCourse } = require("./addCourse");
const { searchRouter } = require("./Route/searchRoute");
const { ContactRoute } = require("./contactAs");
const { Admin_pannel } = require("./Route/admin_panel");
const { Contactdata } = require("./Route/contactdatalist");
const { CourseRegisterRoute } = require("./Route/CourseRegister");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, "..", "public")));
app.use('/upload', express.static(path.join(__dirname, "..", "upload")));

// Routes
app.use('/api', LoginRouter);
app.use("/api", verifyTokenrouter);
app.use("/api", addCourse);
app.use('/api', searchRouter);
app.use('/api', ContactRoute);
app.use('/api', Admin_pannel);
app.use('/api', Contactdata);
app.use('/api', CourseRegisterRoute);

// Serve index.html on /home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// 404 Not Found Handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
