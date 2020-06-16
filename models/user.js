var mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: String,
  },
  {
    timestamps: true,
  }
);

var showSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: Number,
    network: String,
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    shows: [showSchema],
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
