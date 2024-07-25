import mongoose from "mongoose";

const mongoDbURL = "mongodb://localhost:27017/todo-list";

const mongoConnection = () => {
    mongoose.connect(mongoDbURL)
}

export default mongoConnection