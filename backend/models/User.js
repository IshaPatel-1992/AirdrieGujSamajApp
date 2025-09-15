import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String, // For manual registration (hashed)
    },
    authProvider: {
      type: String,
      enum: ["google", "microsoft", "manual"],
      default: "manual",
    },
    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },
    membershipStatus: {
      type: String,
      enum: ["active", "expired", "pending"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
