const express = require("express");
const router = express.Router();

const {
  createService,
  getAllServices,
  getSingleService,
  getMyServices,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const { protect } = require("../middleware/authMiddleware");

// Create a new service (Only logged-in freelancers)
router.post("/create", protect, createService);

// Get all services
router.get("/all", getAllServices);

// Get logged-in freelancer's services
router.get("/my-services", protect, getMyServices);

// Update a service (Only owner)
router.put("/update/:id", protect, updateService);

// Delete a service (Only owner)
router.delete("/delete/:id", protect, deleteService);

// Get a single service by ID
router.get("/:id", getSingleService);

module.exports = router;