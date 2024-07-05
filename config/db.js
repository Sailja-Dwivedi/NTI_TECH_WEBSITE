// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/test").then(() => {
//     console.log("Connected to MongoDB");
// }).catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
// });

// module.exports = mongoose;
// mongodb+srv://dg476504:<password>@firstdeploymentdb.yupixxr.mongodb.net/

require("dotenv/config");
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.yupixxr.mongodb.net`)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

module.exports = mongoose;
