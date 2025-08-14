import React from 'react';

import Diwali from '../assets/Events/Diwali1.jpg';
import Holi from '../assets/Events/Holi.jpg';
import Navratri from '../assets/Events/Navratri.png';
import Picnic from '../assets/Events/Picnic.jpg';


const events = [
  {
    title: "Diwali Celebration",
    image: Diwali,
    description:
      "Protect your business with comprehensive security solutions, including threat detection, firewall management, and data encryption.",
  },
  {
    title: "Holi Festival",
    image: Holi,
    description:
      "Streamline communication with advanced VoIP, PBX systems, and unified communication services tailored to your organization's needs.",
  },
  {
    title: "Navratri Festivities",
    image: Navratri,
    description:
      "Accelerate your digital transformation with scalable cloud solutions including migration, deployment, and cost optimization.",
  },
  {
    title: "Picnic Event",
    image: Picnic,
    description:
      "Let us manage your IT infrastructure with 24/7 monitoring, remote support, and regular maintenance to ensure uptime and efficiency.",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-12 tracking-tight">
          Our IT Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map(({ title, description, image }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl shadow-xl group aspect-[4/3] transform transition-transform duration-500 ease-in-out hover:scale-[1.02]"
            >
              {/* Background image with zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              ></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                <h3 className="text-xl font-bold drop-shadow-md">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed drop-shadow-md">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
