import Event from "../models/Event.js";
import cloudinary from "../config/cloudinary.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, price, capacity } = req.body;

    const event = new Event({
      title,
      description,
      date,
      location,
      price,
      capacity,
      createdBy: req.user._id, // assuming admin auth
    });

    await event.save();

    // Create a Cloudinary folder (naming convention: events/EventNameYear)
    const folderName = `events/${title.replace(/\s+/g, "")}${new Date(date).getFullYear()}`;

    // Cloudinary doesn’t require manual folder creation — 
    // it auto-creates when you upload first image.
    // But we can ping it once to ensure consistency:
    await cloudinary.api.create_folder(folderName);

    res.status(201).json({ message: "Event created and folder ready!", event, folderName });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//An entry is added to MongoDB. A matching folder like events/Navratri2026 is created in Cloudinary.