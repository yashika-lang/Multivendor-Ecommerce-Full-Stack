const express = require("express");
const router = express.Router();

const {
  addReview,
  getReviews,
} = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

// Add Review
router.post("/:serviceId", protect, addReview);

// Get Reviews
router.get("/:serviceId", getReviews);

module.exports = router;