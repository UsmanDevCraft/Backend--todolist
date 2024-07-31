const jwt = require("jsonwebtoken");
const secret_key = "qwerty12345";

const fetchuser = async (req, res, next) => {
    const token = req.headers["auth-token"];
    if(!token){
        return res.status(404).json({error: "Invalid login attempt, auth-token not found"})
    };

    try {

    const data = jwt.verify(token, secret_key);
    req.user = data.user;
    next();
    } catch (error) {
        res.status(404).json({error: "Invalid login attempt"})
    }
};

module.exports = fetchuser