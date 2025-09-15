import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
/* import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"; */ 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

// Simple health route to confirm server + DB ready
app.get("/api/health", (req, res) => {
return res.json({ ok: true, time: new Date().toISOString() });
});

// Mount API routes
app.use("/api/auth", authRoutes);

// Routes
/* app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/admin", adminRoutes); */ 

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// For extra safety, handle unhandled rejections
process.on("unhandledRejection", (err) => {
console.error("Unhandled Rejection:", err);
server.close(() => process.exit(1));
});
