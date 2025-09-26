const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Only for manual signup
  picture: { type: String },
  provider: { type: String, enum: ["manual", "google", "microsoft", "apple"], default: "manual" },
  role: { type: String, default: "user" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
