import express from "express"
import mongoConnection from "./db.js";
import router from "./routes/Lists.js"
import cors from "cors"

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

mongoConnection();

app.use("/api/tasks", router);

app.get("/", (req, res)=>{
    res.send("hi")
})

app.listen(port, () => {
    console.log(`Server is running fine on http://localhost:${port}`)
})