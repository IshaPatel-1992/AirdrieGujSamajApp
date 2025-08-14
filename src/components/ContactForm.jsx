import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_i19x4ln',    // Replace with your EmailJS Service ID
      'template_a54j1lm',   // Replace with your EmailJS Template ID 
      formRef.current,
      '-EJcj8U8XwGP3JJoh'   // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error(error);
    });
  };

  return (
    <section id="contactus" className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-10">
          Have questions or need a custom solution? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl space-y-4 text-left"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
