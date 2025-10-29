import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

// ✅ Allowed origins
const allowedOrigins = [
  "https://airdrie-guj-samaj-app-zyzs.vercel.app",
  "http://localhost:3000",
];

// ✅ CORS setup (no manual app.options)
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    console.log("❌ Blocked by CORS:", origin);
    return callback(new Error("CORS not allowed for this origin"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Parse JSON
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
