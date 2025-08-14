import React from 'react';
import { FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-24 font-space"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 tracking-tight drop-shadow-sm">
          Who We Are
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <span className="italic text-teal-600 font-semibold">Janvi Technologies</span> is your partner in digital transformation — delivering secure, scalable, and smart IT solutions. From{" "}
          <span className="font-bold text-gray-800">cybersecurity</span> to{" "}
          <span className="font-bold text-gray-800">cloud integration</span>, we help businesses innovate with confidence.
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-teal-600 rounded-full mx-auto my-8"></div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <FaLightbulb className="text-teal-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-teal-800 mb-2">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              We follow a <span className="font-medium">human-centered</span> approach, blending design thinking and technical expertise for impactful, practical solutions tailored for industries like healthcare, legal, and hospitality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
            <FaHandshake className="text-teal-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-teal-800 mb-2">Our Partners</h3>
            <p className="text-gray-600 leading-relaxed">
              We collaborate with <span className="font-medium">Microsoft, Dell, HPE, Telus, Cisco,</span> and others — ensuring our clients benefit from world-class technologies and best practices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 md:col-span-1">
            <FaUsers className="text-teal-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-teal-800 mb-2">What We Offer</h3>
            <p className="text-gray-600 leading-relaxed">
              Whether it's <span className="font-medium">cybersecurity</span>, <span className="font-medium">telecom infrastructure</span>, or advanced <span className="font-medium">web and mobile app development</span>, we build future-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
