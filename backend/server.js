// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// Initialize Express
const app = express();

// -------------------- Middleware --------------------
app.use(cors());
app.use(express.json());

// -------------------- Database --------------------
connectDB();

// -------------------- Routes --------------------
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);

// -------------------- Error Handling --------------------
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
});

// -------------------- Server Startup --------------------
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);

// -------------------- Graceful Shutdown --------------------
// ✅ Prevent duplicate listener registrations with Nodemon restarts
if (process.listenerCount("unhandledRejection") === 0) {
  process.on("unhandledRejection", (err) => {
    console.error("❌ Unhandled Rejection:", err);
    server.close(() => process.exit(1));
  });
}
