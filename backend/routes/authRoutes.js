import express from "express";
const router = express.Router();


// Minimal route so server starts even if you haven't built auth yet
router.get("/ping", (req, res) => {
res.json({ ok: true, msg: "auth route working" });
});

const authController = require("../controllers/authController");

router.post("/manual", authController.manualAuth);
router.post("/google", authController.googleAuth);
router.post("/microsoft", authController.microsoftAuth);

export default router;


//module.exports = router;
