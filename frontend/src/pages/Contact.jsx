import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/Button.jsx";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const formRef = useRef();
  const location = useLocation();
  const [notifyMembership, setNotifyMembership] = useState(false);

  // ✅ Auto-check "Notify Me" if user came from membership section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("from") === "membership") {
      setNotifyMembership(true);
    }
  }, [location.search]);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message submitted successfully!");
        formRef.current.reset();
        setNotifyMembership(false);
      } else {
        alert("Error submitting form. Please try again.");
      }
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend error:", errorData);
        alert("Error submitting form: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };



  return (
    <section id="contact" className="py-16 bg-brand-cream">
      <div className="p-6 max-w-5xl mx-auto animate-fadeIn text-brand">
        <h2 className="text-3xl font-heading font-bold tracking-wide text-center text-brand mb-10">
          Contact & Join Us
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 space-y-4 border-2 border-[#4b1d1d] rounded-lg p-6 shadow-lg bg-white"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-2 border-2 border-[#4b1d1d] rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-2 border-2 border-[#4b1d1d] rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full p-2 border-2 border-[#4b1d1d] rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            {/* ✅ Notify Me Checkbox */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="notify_membership"
                checked={notifyMembership}
                onChange={(e) => setNotifyMembership(e.target.checked)}
                className="h-5 w-5 text-yellow-500 border-2 border-[#4b1d1d] rounded focus:ring-yellow-400"
              />
              <span className="text-brand">
                Notify me about membership updates or newsletters from Airdrie Gujarati Samaj
              </span>
            </label>

            <center>
              <Button
                type="submit"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
              >
                Send Message
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
