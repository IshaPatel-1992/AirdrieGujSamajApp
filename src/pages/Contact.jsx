import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "../components/ui/Button.jsx";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <section className="py-16 bg-brand-cream">
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
              required
            ></textarea>

            <Button type="submit" className="mt-2 w-full bg-brand hover:bg-brand-light text-white">
              Send Message
            </Button>
          </form>

          {/* Membership CTA */}
          <div className="flex-1 bg-brand-cream p-8 rounded-2xl shadow-lg border border-yellow-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-[#4b1d1d] mb-4">
              Become a Part of Something Special
            </h3>
            <p className="text-brand mb-6 px-4">
              Join Airdrie Gujarati Samaj and take part in cultural celebrations, events, and a vibrant community!
            </p>
            <a
              href="/membershipdetails"
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
