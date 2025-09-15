import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    price: { type: Number, default: 0 }, // free event if 0
    capacity: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // admin who created
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
