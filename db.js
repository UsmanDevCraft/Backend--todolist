const mongoose = require("mongoose");

const mongoDbURL = "mongodb://localhost:27017/todo-list";

const mongoConnection = () => {
    mongoose.connect(mongoDbURL)
}


module.exports = mongoConnection