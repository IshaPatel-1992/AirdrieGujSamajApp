import express from "express";
const router = express.Router();


// Minimal route so server starts even if you haven't built auth yet
router.get("/ping", (req, res) => {
res.json({ ok: true, msg: "auth route working" });
});


export default router;