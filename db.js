const mongoose = require("mongoose");

const mongoDbURL = "mongodb+srv://izzakhan8357:maniking@clustertodolist.lwl18sb.mongodb.net/todo-list-backend?retryWrites=true&w=majority&appName=ClusterTodoList";

const mongoConnection = () => {
    mongoose.connect(mongoDbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        writeConcern: {
          w: 'majority',
          wtimeout: 2500
        }
      }).then(() => {
        console.log('Connected to MongoDB');
      }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
      });
}


module.exports = mongoConnection