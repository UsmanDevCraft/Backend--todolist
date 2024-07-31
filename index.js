const express = require("express");
const cors = require("cors");
const mongoConnection = require("./db.js");
mongoConnection();

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())


app.use("/api/tasks", require("./routes/Lists"));
app.use("/api/auth", require("./routes/auth"));

app.get("", (req, res)=>{
    res.send("API is Working 😋");
})

app.listen(port, () => {
    console.log(`Server is running fine on http://localhost:${port}`)
})