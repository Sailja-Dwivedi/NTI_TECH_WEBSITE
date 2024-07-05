const mongoose = require('mongoose');

const courseRegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    courseName: String
});

const CourseRegister = mongoose.model('CourseRegister', courseRegisterSchema);

module.exports = { CourseRegister };
