const Service = require("../models/Service");
const createService = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      deliveryTime,
      revisions,
      skills,
      images,
    } = req.body;

    // Only freelancers can create services
    if (req.user.role !== "freelancer") {
      return res.status(403).json({
        success: false,
        message: "Only freelancers can create services.",
      });
    }

    const service = await Service.create({
      title,
      description,
      category,
      price,
      deliveryTime,
      revisions,
      skills,
      images,
      freelancer: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      service,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate(
      "freelancer",
      "name username"
    );

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate(
      "freelancer",
      "name username email"
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyServices = async (req, res) => {
  try {
    const services = await Service.find({
      freelancer: req.user._id,
    }).populate("freelancer", "name username email");

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (service.freelancer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this service.",
      });
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (service.freelancer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this service.",
      });
    }

    await service.deleteOne();

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createService,
  getAllServices,
  getSingleService,
  getMyServices,
  updateService,
  deleteService,
};