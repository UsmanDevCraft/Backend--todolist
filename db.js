const mongoose = require("mongoose");

const mongoDbURL = "mongodb+srv://izzakhan8357:maniking@clustertodolist.lwl18sb.mongodb.net/todo-list-backend?retryWrites=true&w=majority&appName=ClusterTodoList";

const mongoConnection = () => {
    mongoose.connect(mongoDbURL)
}


module.exports = mongoConnection