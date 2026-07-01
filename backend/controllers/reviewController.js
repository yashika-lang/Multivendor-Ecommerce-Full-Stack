const Review = require("../models/Review");
const Order = require("../models/Order");
const Service = require("../models/Service");


// Add Review

const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const service = await Service.findById(req.params.serviceId);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    const completedOrder = await Order.findOne({
      service: service._id,
      client: req.user._id,
      status: "Completed",
    });

    if (!completedOrder) {
      return res.status(400).json({
        success: false,
        message: "You can review only after completing the order.",
      });
    }

    const alreadyReviewed = await Review.findOne({
      service: service._id,
      client: req.user._id,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this service.",
      });
    }

    const review = await Review.create({
      service: service._id,
      client: req.user._id,
      rating,
      comment,
    });

    // Update service rating automatically
    const reviews = await Review.find({ service: service._id });

    const totalReviews = reviews.length;

    const averageRating =
      reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

    service.rating = Number(averageRating.toFixed(1));
    service.totalReviews = totalReviews;

    await service.save();

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      service: req.params.serviceId,
    }).populate("client", "name username");

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addReview,
  getReviews,
};