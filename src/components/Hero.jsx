import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import banner4 from "../assets/banners/BannerImgGuj.jpg";

const banners = [banner4];

const TechIcon = () => (
  <svg
    className="w-12 h-12 text-teal-600 mx-auto mb-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-teal-400 via-white to-teal-100"
    >
      {/* Optional abstract shape */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0f766e"
          fillOpacity="1"
          d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,133.3C840,139,960,181,1080,170.7C1200,160,1320,96,1380,64L1440,32V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
        ></path>
      </svg>

      {/* Overlay content */}
      <div className="relative z-10 text-center px-4 text-teal-900">
        <TechIcon />
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight font-space
          bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800
          bg-clip-text text-transparent"
        >
          <Typewriter
            words={["Innovate.", "Transform.", "Lead."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-raleway">
          Empowering digital transformation through cutting-edge IT solutions.
        </p>
        <a
          href="#contactus"
          className="mt-8 inline-block bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-full text-white font-semibold transition duration-300 shadow-md"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
