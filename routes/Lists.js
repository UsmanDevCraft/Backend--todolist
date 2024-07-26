const express = require("express");
const listModel = require("../models/List.js");

const router = express.Router();

//Endpoint for creating a Todo task
router.post("/create", async (req, res)=>{
    try {
        const listWork = new listModel({
            title: req.body.title,
            description: req.body.description,
        })
        const savedTask = await listWork.save()
        res.send(savedTask);
    } catch (error) {
        res.status(400).send("An error occured while creating the task.")
    }
});


//Endpoint for fetching all Todo tasks
router.get("/fetchall", async (req, res) => {
    try {
        const fetchTasks = await listModel.find();
        res.send(fetchTasks);
    } catch (error) {
        res.status(404).send("Tasks not found!")
    }
});


//Endpoint for updating a Todo task
router.put("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const newTask = {};
        if(title){newTask.title = title};
        if(description){newTask.description = description};
        const upgradeTask = await listModel.findByIdAndUpdate(id, {$set: newTask}, {new: true});
        res.send(upgradeTask);
    } catch (error) {
        res.status(404).send("Task not found, cannot be updated") 
    }
});


//Endpoint for deleting a Todo task
router.delete("/delete/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const taskDelete = await listModel.findByIdAndDelete(id);
        if(!taskDelete){
            return res.status(404).send("Task not found or already be deleted");
        }
        res.send({taskDelete, msg: "Note deleted successfully"})
    } catch (error) {
        res.status(404).send("Task not found, cannot be deleted");
    }
})

module.exports = router;