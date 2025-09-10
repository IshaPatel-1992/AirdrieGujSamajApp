import React from 'react';

import Diwali from '../assets/Events/Diwali1.jpg';
import Holi from '../assets/Events/Holi.jpg';
import Navratri from '../assets/Events/Navratri.png';
import Picnic from '../assets/Events/Picnic.jpg';
import Katha from '../assets/Events/Satyanarayan Katha.jpg';
import Movie from '../assets/Events/MovieTheatre.jpg';
import Camping from '../assets/Events/Camping1.jpg';

const events = [
  {
    title: "Satyanarayan Katha",
    image: Katha,
    description:
      "Join us for a spiritual gathering and Satyanarayan Katha, fostering devotion and community bonding.",
    month: "April",
  },
  {
    title: "Holi Festival",
    image: Holi,
    description:
      "Celebrate the festival of colors with music, dance, and vibrant festivities! A joyful event for all ages.",
    month: "May",
  },
  {
    title: "Picnic Event",
    image: Picnic,
    description:
      "A fun-filled outdoor picnic for families and friends! Enjoy games, food, and relaxation in a beautiful natural setting.",
    month: "June",
  },
  {
    title: "Movie Night",
    image: Movie,
    description:
      "Enjoy a relaxing evening watching family-friendly movies under the stars with snacks and community vibes.",
    month: "July",
  },
  {
    title: "Camping Trip",
    image: Camping,
    description:
      "Experience adventure and bonding with fellow community members on a weekend camping trip.",
    month: "August",
  },
  {
    title: "Navratri Festivities",
    image: Navratri,
    description:
      "Nine nights of Garba, Dandiya, and cultural celebration! Dress in vibrant attire and dance with the community.",
    month: "September",
  },
  {
    title: "Diwali Celebration",
    image: Diwali,
    description:
      "Celebrate the Festival of Lights with performances, traditional food, and fireworks for the whole community.",
    month: "October",
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
          {events.map(({ title, description, image, month }) => (
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
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-brand mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm mb-3 font-medium">{month}</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
                </div>

                {/* View Details Button */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block bg-brand-saffron text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-brand-yellow hover:scale-105 transition transform text-sm"
                  >
                    View More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
