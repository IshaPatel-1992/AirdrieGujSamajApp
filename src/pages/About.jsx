import React from 'react';
import { FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="p-6 max-w-4xl mx-auto animate-fadeIn text-brand">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center mb-12 text-brand">
          About Us
        </h2>

        {/* Description */}
        <div className="space-y-6 text-gray-800 text-base leading-relaxed font-sans max-w-2xl mx-auto text-center">
          <p>
            <strong className="text-brand hover:text-brand-yellow">Airdrie Gujarati Samaj</strong> is a nonprofit cultural association
            dedicated to fostering <strong>community spirit</strong>, preserving our vibrant
            <strong> Gujarati heritage</strong>, and creating a warm, inclusive environment
            for families and individuals of all ages.
          </p>
          <p>
            We celebrate our culture through <strong>festivals</strong>, <strong>workshops</strong>,
            and <strong>community events</strong> that bridge generations, support newcomers,
            and strengthen the ties that bind us.
          </p>
          <p>
            Join us in honoring our <strong>traditions</strong>, sharing our stories, and building a
            united and culturally rich Gujarati community in Airdrie — and beyond.
          </p>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center gap-12 mt-12 text-brand">
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl mb-2 text-brand hover:text-brand-yellow transition" />
            <span className="font-semibold text-gray-800">Community</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHandshake className="text-5xl mb-2 text-brand hover:text-brand-yellow transition" />
            <span className="font-semibold text-gray-800">Support</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-5xl mb-2 text-brand hover:text-brand-yellow transition" />
            <span className="font-semibold text-gray-800">Innovation</span>
          </div>
        </div>

        {/* Membership Call-to-Action */}
        <div className="bg-brand text-white p-10 rounded-2xl shadow-lg text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Become a Member</h3>
          <p className="mb-6 text-lg">
            Ready to be part of something meaningful? Enjoy exclusive events and
            community programs.
          </p>
          <a
            href="/membershipdetails"
            className="bg-yellow-400 hover:bg-yellow-300 text-brand font-semibold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
