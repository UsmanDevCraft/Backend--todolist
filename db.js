require('dotenv').config();
const mongoose = require("mongoose");

const mongoDbURL = process.env.MONGODB_URL;
console.log(process.env.MONGODB_URL)

const mongoConnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
}

module.exports = mongoConnection;
