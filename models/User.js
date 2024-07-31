const mongoose = require("mongoose")
const {Schema} = mongoose;

const UserModel = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("UserModel", UserModel)