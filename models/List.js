import mongoose, { Schema } from "mongoose";

const listModel = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("listModel", listModel)