const express = require("express");
const router = express.Router();

const {
  getMyProfile,
  updateProfile,
  getUserProfile,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Logged-in user's profile
router.get("/profile", protect, getMyProfile);

// Update logged-in user's profile
router.put("/profile", protect, updateProfile);

// Public freelancer profile
router.get("/:id", getUserProfile);

module.exports = router;