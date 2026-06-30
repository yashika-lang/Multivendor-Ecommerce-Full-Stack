const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["client", "freelancer"],
      default: "client",
    },

    bio: {
      type: String,
      default: "",
      trim: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    experience: {
      type: String,
      default: "",
    },

    languages: [
      {
        type: String,
      },
    ],

    portfolio: [
      {
        type: String,
      },
    ],

    profileImage: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema); // user ka scwhema banana 