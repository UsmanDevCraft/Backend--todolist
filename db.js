const mongoose = require("mongoose");


const mongoDbURL = "mongodb+srv://izzakhan8357:maniking@clustertodolist.lwl18sb.mongodb.net/todo-list?retryWrites=true&w=majority&appName=ClusterTodoList";

const mongoConnection = () => {
    mongoose.connect(mongoDbURL)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log("MongoDB connection error: ", err));
}

module.exports = mongoConnection;
