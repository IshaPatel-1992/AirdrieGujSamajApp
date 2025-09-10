const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  provider: String, // google, microsoft, apple
  providerId: String,
  email: String,
  name: String,
  picture: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
