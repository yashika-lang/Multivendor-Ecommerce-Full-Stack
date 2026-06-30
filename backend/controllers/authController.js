const bcrypt = require("bcryptjs"); // IMport bcryptjs for password hashing
const User = require("../models/User");// Import the User model
const jwt = require("jsonwebtoken");// Import jsonwebtoken for generating JWT tokens

const registerUser = async (req, res) => {
  const {
    name,
    username,
    email,
    phone,
    password,
    role,
  } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    username,
    email,
    phone,
    password: hashedPassword,
    role,
  });
  const token = jwt.sign({ // it creates kew token 
      id: user._id },
      process.env.JWT_SECRET,
       { expiresIn: "7d" }

  );

  res.status(201).json({
  success: true,
  message: "User Registered Successfully",
  token,
  user: {
    id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    role: user.role,
  },
});
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
  });
};

const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};