// const express = require("express");
// const { mongoose } = require("../config/db");
// const { RegistrationRouter } = require("./Route/registrationRoute");
// const { LoginRouter } = require("./Route/LoginRoute");
// const { verifyTokenrouter } = require("./Route/jwtRoute");
// const { addCourse } = require("./addCourse");
// const { searchRouter } = require("./Route/searchRoute");
// const path = require("path");
// const ContactRoute = require("./contactAs");
// const { Admin_pannel } = require("./Route/admin_panel");
// const app = express();
// require("dotenv/config");

// // Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded({ extended: true }));

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use("/public", express.static(path.join(__dirname, "public")));

// // Serve images from the 'upload' directory
// app.use('/upload', express.static(path.join(__dirname, "..", "upload")));

// // Set up your API routes
// app.use('/api', RegistrationRouter);
// app.use('/api', LoginRouter);
// app.use("/api", verifyTokenrouter);
// app.use("/api", addCourse);
// app.use('/api', searchRouter);
// app.use('/api', ContactRoute);
// app.use('/api', Admin_pannel);


// // Serve the index.html file from the public directory
// app.get('/home', (req, res) => {
//     const indexPath = path.join(__dirname, "..", "public", "index.html");
//     res.sendFile(indexPath);
// });

// // Start the server
// const port = process.env.PORT || 4500;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);

// });





const express = require("express");
// const cors = require('cors');
const path = require("path");
const { mongoose } = require("../config/db");
// const { RegistrationRouter } = require("./Route/registrationRoute");
const { LoginRouter } = require("./Route/LoginRoute");
const { verifyTokenrouter } = require("./Route/jwtRoute");
const { addCourse } = require("./addCourse");
const { searchRouter } = require("./Route/searchRoute");
const ContactRoute = require("./contactAs");
const { Admin_pannel } = require("./Route/admin_panel");
const { Contactdata } = require("./Route/contactdatalist");
const { CourseRegisterRoute } = require("./Route/CourseRegister");
// const { CourseRegisterRoute } = require("./Route/registerCourse");
// require("dotenv/config");

const app = express();
// app.use(cors());


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "..", "public")));

// Serve images from the 'upload' directory
app.use('/upload', express.static(path.join(__dirname, "..", "upload")));

// Set up your API routes
// app.use('/api', RegistrationRouter);
app.use('/api', LoginRouter);
app.use("/api", verifyTokenrouter);
app.use("/api", addCourse);
app.use('/api', searchRouter);
app.use('/api', ContactRoute);
app.use('/api', Admin_pannel);
app.use('/api', Contactdata);
app.use('/api', CourseRegisterRoute);

// Serve the index.html file from the public directory
app.get('/home', (req, res) => {
    const indexPath = path.join(__dirname, "..", "public", "index.html");
    res.sendFile(indexPath);
});

// app.get("/api/Contactlist", (req, res) => {
//     res.send("hello")
// })

// Start the server
const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
