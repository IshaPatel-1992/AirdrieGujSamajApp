import React from 'react';
import { motion } from 'framer-motion';
import heroIllustration from '../assets/hero-illustration.svg'; // Update with your image path
import bgImage from '../assets/your-background.jpeg'; // Background image path

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Innovate. Transform. Lead.
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering digital transformation through modern IT solutions.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Get Started
        </motion.a>

        {/* Hero Image */}
        <motion.img
          src={heroIllustration}
          alt="Digital transformation"
          className="mt-12 max-w-xs md:max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
      </div>
    </section>
  );
}
// This Hero component features a full-screen background image with a dark overlay,
// a headline, subheadline, and a call-to-action button. It uses Framer Motion for smooth animations and transitions.
// The hero illustration is displayed below the text, enhancing the visual appeal of the section.