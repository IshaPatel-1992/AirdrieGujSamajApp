// server/routes/contactRoutes.js
import express from "express";
//import nodemailer from "nodemailer"; // optional alternative to EmailJS
import Contact from "../models/Contact.js";
//  import emailjs from "@emailjs/nodejs"; // optional server-side EmailJS

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
    try {
        const { user_name, user_email, message, notify_membership } = req.body;

        // 1️⃣ Save to MongoDB
        const contact = new Contact({
            user_name,
            user_email,
            message,
            notify_membership,
            createdAt: new Date(),
        });
        await contact.save();

        // Form submitted successfully!
        res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }

    // 2️⃣ (Optional) Send via EmailJS
    /* await emailjs.send(
     process.env.VITE_EMAILJS_SERVICE_ID,
     process.env.VITE_EMAILJS_TEMPLATE_ID,
     {
       user_name,
       user_email,
       message,
       notify_membership,
     },
     {
       publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY,
     }
   ); */
    // Message sent successfully!
    /* res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, error: "Server error" });
  } */


});

export default router;
