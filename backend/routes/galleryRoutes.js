import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import Gallery from "../models/Gallery.js";
import Event from "../models/Event.js";

const router = express.Router();

router.post("/upload/:eventId", async (req, res) => {
  const { eventId } = req.params;
  const event = await Event.findById(eventId);
  if (!event) return res.status(404).json({ message: "Event not found" });

  // Configure storage dynamically for each event folder
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `events/${event.title.replace(/\s+/g, "")}${new Date(event.date).getFullYear()}`,
      allowed_formats: ["jpg", "png", "jpeg"],
    },
  });

  const upload = multer({ storage }).single("image");

  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ message: err.message });

    const newPhoto = await Gallery.create({
      event: eventId,
      uploadedBy: req.user?._id || null,
      caption: req.body.caption,
      imageUrl: req.file.path,
      public_id: req.file.filename,
      folderPath: req.file.folder,
    });

    res.status(201).json(newPhoto);
  });
});

export default router;


//The correct event folder in Cloudinary, and The event ID in MongoDB.