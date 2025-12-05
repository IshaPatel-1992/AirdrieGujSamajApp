import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/banners/BannerImgGuj.jpg";
import { Link } from "react-router-dom";
import UIButton from "./ui/UIButtons";

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
      className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
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
        {/* Main Tagline */}
        <h3 className="mt-6 inline-block text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-brand-saffron to-brand-green px-8 py-3 rounded-lg shadow-lg">
          Let’s grow together, Let’s glow together
        </h3>

        {/* Membership Tagline + Notify Button */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-white text-base md:text-lg font-medium bg-black/30 px-6 py-2 rounded-md text-center">
            Don’t miss out! Membership registration begins March 2026
          </p>
          <UIButton to="/contact?from=membership" variant="yellow">
            Notify Me
          </UIButton>
        </div>


        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <UIButton to="/events" variant="saffron">Upcoming Events</UIButton>
          <UIButton to="/contact" variant="green">Contact Us</UIButton>
        </div>

      </div>
    </section>
  );
}
