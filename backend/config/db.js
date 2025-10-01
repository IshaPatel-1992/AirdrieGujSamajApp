// backend/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error("MONGO_URI is not set in environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

// Graceful shutdown helper
const gracefulClose = async () => {
  try {
    await mongoose.connection.close(false);
    console.log("MongoDB connection closed");
    process.exit(0);
  } catch (err) {
    console.error("Error during MongoDB graceful shutdown:", err);
    process.exit(1);
  }
};

// ✅ Only attach listeners once
if (process.listenerCount("SIGINT") === 0) {
  process.on("SIGINT", gracefulClose);
}
if (process.listenerCount("SIGTERM") === 0) {
  process.on("SIGTERM", gracefulClose);
}

export default connectDB;
