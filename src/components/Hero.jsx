import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/banners/BannerImgGuj.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [heroImage]; // you can add more images later

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
      {/* Overlay to make text pop */}
      <div className="absolute inset-0 bg-brand-light/50 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* Main Heading with Typewriter */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow via-brand to-brand hover:from-brand hover:to-brand-yellow animate-fadeIn">
          <Typewriter
            words={["Embracing Tradition", "Fostering Unity", "Empowering Our Community"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

        {/* Subheading */}
        <h3 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-brand bg-white/60 px-4 py-1 rounded shadow-sm animate-fadeIn">
          Let's grow together, Let's glow together
        </h3>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="/events"
            className="uppercase tracking-wide bg-brand hover:bg-brand-light text-white font-semibold px-6 py-2 rounded-full shadow transition transform hover:scale-105"
          >
            Upcoming Events
          </a>
          <a
            href="/contact"
            className="uppercase tracking-wide bg-brand-yellow hover:bg-yellow-400 text-brand font-semibold px-6 py-2 rounded-full shadow transition transform hover:scale-105"
          >
            Contact Us
          </a>
          
        </div>
      </div>
    </section>
  );
}
