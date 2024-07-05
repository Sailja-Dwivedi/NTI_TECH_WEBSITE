const mongoose = require("../../config/db");
const { courseModel } = require("./courses_add");

const registrationSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    password: String,
});

const registrationModal = mongoose.model("registration_", registrationSchema);

module.exports = {
    registrationModal
}
