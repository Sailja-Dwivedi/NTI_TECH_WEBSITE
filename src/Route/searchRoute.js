const express = require('express');
const searchRouter = express.Router();
const { courseModel } = require('../modal/courses_add');

// POST method route to search for courses
searchRouter.post('/search', async (req, res) => {
    try {
        const search = req.body.name;
        const course = await courseModel.find({ "name": { $regex: ".*" + search + ".*", $options: 'i' } });

        if (course.length > 0) {
            res.status(200).json({
                success: true,
                msg: "Course details found",
                course
            });
        } else {
            res.status(404).json({
                success: true,
                msg: "Course not found",
                course
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
});

// GET method route to get all courses
searchRouter.get('/allcourse', async (req, res) => {
    try {
        const courses = await courseModel.find({});
        res.status(200).json({
            success: true,
            msg: "All courses retrieved",
            courses
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
});

module.exports = { searchRouter };
