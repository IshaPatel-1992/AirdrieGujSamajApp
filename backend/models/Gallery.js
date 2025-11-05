import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  caption: String,
  imageUrl: String,  // Cloudinary URL
  public_id: String, // For deletion
  folderPath: String, // e.g. "events/Diwali2025"
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Gallery", gallerySchema);


//Tie each photo to an event and uploader.

//Keep Cloudinary folder reference for clarity.

//Easily fetch all images per event.