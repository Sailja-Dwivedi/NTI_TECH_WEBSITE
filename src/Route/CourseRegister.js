const express = require("express");
const CourseRegisterRoute = express.Router();
const { CourseRegister } = require("../modal/registemodal");




CourseRegisterRoute.post('/registerForCourse', async (req, res) => {
    const { name, email, phone, courseName } = req.body;

    try {
        // Create a new registration instance
        const registration = new CourseRegister(req.body);

        // Save registration data to the database
        await registration.save();

        res.status(201).json({ message: 'Registration successful', registration });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});
module.exports = { CourseRegisterRoute };