const express = require("express");
const UserModel = require("../models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret_key = "qwerty12345";
const fetchuser = require("../middleware/fetchuser")

const router = express.Router();



//Endpoint for creating a user
router.post("/createuser", async (req, res) => {

    try {

        let user = await UserModel.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error:"Email already exists, please try another one"})
        };

        const salt = await bcrypt.genSalt(10);
        const securedPass = await bcrypt.hash(req.body.password, salt);

        user =  new UserModel({
            email: req.body.email,
            password: securedPass,
        });

        const savedUser = await user.save();

        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign( data, secret_key);

        res.send({savedUser, authToken});
    } catch (error) {
        res.status(400).send(error);
    }
})



//Endpoint for logging a user
router.post("/loginuser", async (req, res) => {
    try {
        user = await UserModel.findOne({email: req.body.email})
        if(!user){
            return res.status(404).json({error:"Not Found, Please Signin."})
        }

        const compPass = await bcrypt.compare(req.body.password, user.password);
        if(!compPass){
            return res.status(400).json({error: "Please provide the correct credentials"})
        }

        const data = {
            user:{
                id: user.id
            }
        };
        const authToken = jwt.sign(data, secret_key);

        res.send({user, authToken})
    } catch (error) {
        res.status(400).send(error);
    }
});


//Endpoint for getting a users data
router.post("/getdata", fetchuser , async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await UserModel.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        res.send(error)
    }
});



module.exports = router;