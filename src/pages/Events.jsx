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
      "Join us for a night of lights, music, and festivities! Enjoy traditional performances, delicious Indian cuisine, and fireworks to celebrate the Festival of Lights.",
  },
  {
    title: "Holi Festival",
    image: Holi,
    description:
      "Experience the joy of colors with music, dancing, and color throwing! This vibrant festival marks the arrival of spring with unity and happiness.",
  },
  {
    title: "Navratri Festivities",
    image: Navratri,
    description:
      "Nine nights of dance, devotion, and cultural celebration! Come dressed in colorful attire for Garba and Dandiya nights full of energy and community spirit.",
  },
  {
    title: "Picnic Event",
    image: Picnic,
    description:
      "A fun-filled outdoor picnic for families and friends! Enjoy games, food, and relaxation in a beautiful natural setting.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-brand mb-12 tracking-tight">
          Our Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(({ title, description, image }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl shadow-lg group transform transition duration-500 hover:scale-105 bg-white"
            >
              {/* Event image */}
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand mb-2">{title}</h3>
                <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
