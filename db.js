const mongoose = require("mongoose");

const mongoDbURL = "mongodb+srv://usman:maniking1234@cluster0.la9vxmg.mongodb.net/todo-list-backend?retryWrites=true&w=majority&appName=Cluster0";

const mongoConnection = () => {
    mongoose.connect(mongoDbURL)
}


module.exports = mongoConnection