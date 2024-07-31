const express = require("express");
const cors = require("cors");
const mongoConnection = require("./db.js");
mongoConnection();

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors({
    origin: 'https://todo-list-taupe-seven-56.vercel.app', // Allow only your frontend origin
    methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
    credentials: true // If you need to include cookies in requests
}));
  


app.use("/api/tasks", require("./routes/Lists"));
app.use("/api/auth", require("./routes/auth"));

app.get("", (req, res)=>{
    res.send("API is Working 😋");
})

app.listen(port, () => {
    console.log(`Server is running fine on http://localhost:${port}`)
})