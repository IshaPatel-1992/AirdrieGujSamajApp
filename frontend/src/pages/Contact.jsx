import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/Button.jsx";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  // ✅ Controlled form state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    notify_membership: false,
  });

  // ✅ Notification state
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState("success");
  const [loading, setLoading] = useState(false);

  // ✅ Auto-check "Notify Me" if user came from membership section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("from") === "membership") {
      setFormData((prev) => ({ ...prev, notify_membership: true }));
    }
  }, [location.search]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    // Validation (optional: you can extend this)
    if (!formData.user_name || !formData.user_email) {
      setNotification("Please fill in your name and email.");
      setNotificationType("error");
      return;
    }

    setLoading(true);

    try {
      
       //const response = await fetch("http://localhost:5000/api/contact", {
      const API_BASE_URL = "https://airdriegujsamajapp.onrender.com";
      const response = await fetch(`${API_BASE_URL}/api/contact`, {     
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          notify_membership: formData.notify_membership ? "Yes" : "No",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setNotification(result.message);
        setNotificationType("success");

        // Reset form only for successful submission
        if (
          result.message === "Form submitted successfully!" ||
          result.message === "Notification preference updated successfully!"
        ) {
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
            notify_membership: false,
          });
        }
      } else {
        setNotification(result.message || "Error submitting form.");
        setNotificationType("error");
      }

      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotification("Something went wrong. Please try again later.");
      setNotificationType("error");
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-brand-cream">
      <div className="p-6 max-w-5xl mx-auto animate-fadeIn text-brand">
        <h2 className="text-3xl font-heading font-bold tracking-wide text-center text-brand mb-10">
          Contact & Join Us
        </h2>

        {/* ✅ Notification Message */}
        {notification && (
          <div
            className={`mb-6 px-4 py-3 rounded-md text-center ${
              notificationType === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {notification}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            className="flex-1 space-y-4 border-2 border-[#4b1d1d] rounded-lg p-6 shadow-lg bg-white"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full p-2 border-2 border-[#4b1d1d] rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-[#4b1d1d] rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-2 border-[#4b1d1d] rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            {/* Notify Me Checkbox */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="notify_membership"
                checked={formData.notify_membership}
                onChange={handleChange}
                className="h-5 w-5 text-yellow-500 border-2 border-[#4b1d1d] rounded focus:ring-yellow-400"
              />
              <span className="text-brand">
                Notify me about membership updates or newsletters from Airdrie Gujarati Samaj
              </span>
            </label>

            <center>
              <Button
                type="submit"
                className={`inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send Message"}
              </Button>
            </center>
          </form>

          {/* Membership CTA */}
          <div className="flex-1 bg-brand-cream p-8 rounded-2xl shadow-lg border border-yellow-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-[#4b1d1d] mb-4">
              Become a Part of Something Special
            </h3>
            <p className="text-brand mb-6 px-4">
              Join Airdrie Gujarati Samaj and take part in cultural celebrations,
              events, and a vibrant community!
            </p>
            <a
              href="/membershipinfo"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
            >
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
