import express from "express";
import { manualAuth, googleAuth, microsoftAuth } from "../controllers/authController.js";

const router = express.Router();

// Health check
router.get("/ping", (req, res) => {
  res.json({ ok: true, msg: "auth route working" });
});

// Auth endpoints
router.post("/manual", manualAuth);
router.post("/google", googleAuth);
router.post("/microsoft", microsoftAuth);

export default router;
