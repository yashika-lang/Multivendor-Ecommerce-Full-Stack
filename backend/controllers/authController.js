const User = require("../models/User");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "User Registered Successfully",
    user,
  });
};

module.exports = { registerUser };