const User = require("../models/User");

const registerUser = async (req, res) => {

    res.json({
        message: "Register API Working"
    });

};

module.exports = {
    registerUser
};