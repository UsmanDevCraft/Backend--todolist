require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoConnection = require("./db.js");


// Connect to the database
mongoConnection();

const app = express();
const port = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(express.json());
app.use(cors())

// Middleware to set timeout for requests
app.use((req, res, next) => {
    req.setTimeout(5000); // 5 seconds
    res.setTimeout(5000); // 5 seconds
    next();
});

// Define routes
app.use("/api/tasks", require("./routes/Lists"));
app.use("/api/auth", require("./routes/auth"));

// Health check endpoint
app.get("/", (req, res) => {
    res.send("API is Working 😋");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running fine on port ${port}`);
});
