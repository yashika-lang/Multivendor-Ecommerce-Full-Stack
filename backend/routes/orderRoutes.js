const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getReceivedOrders,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

// Client places an order
router.post("/create/:serviceId", protect, createOrder);

// Client's own orders
router.get("/my-orders", protect, getMyOrders);

// Freelancer's received orders
router.get("/received-orders", protect, getReceivedOrders);

// Freelancer updates order status
router.put("/status/:id", protect, updateOrderStatus);

// Client cancels an order
router.delete("/cancel/:id", protect, cancelOrder);

module.exports = router;