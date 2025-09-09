import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/banners/BannerImgGuj.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [heroImage]; // Add more images later if needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: `url(${banners[currentIndex]})` }}
    >
      {/* Dark + Brand Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/40 via-transparent to-brand-green/40"></div>
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Welcome Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white drop-shadow-md mb-4">
          Welcome to{" "}
          <span className="text-brand-saffron">Airdrie Gujarati Samaj</span>
        </h2>

        {/* Typewriter Main Heading */}
        <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-brand-saffron via-brand-mint to-brand-green bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
          <Typewriter
            words={[
              "Embracing Tradition",
              "Fostering Unity",
              "Empowering Our Community",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

        {/* Tagline */}
        <h3 className="mt-6 inline-block text-lg md:text-xl font-medium text-brand-saffron bg-white/80 backdrop-blur px-6 py-2 rounded-lg shadow-lg">
          Let’s grow together, Let’s glow together
        </h3>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/events"
            className="bg-brand-saffron text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg hover:brightness-110 transition-all duration-200"
          >
            Upcoming Events
          </Link>

          <Link
            to="/contact"
            className="bg-brand-green text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg hover:brightness-110 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
