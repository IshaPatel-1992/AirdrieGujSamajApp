import React from 'react';
import { FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';
import aboutImage from '../assets/AboutUs/Team1.jpg'; // replace with your image path

export default function About() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 animate-fadeIn">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-16 text-brand tracking-tight">
          About Us
        </h2>

        {/* Content and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="lg:w-1/2 text-gray-800 space-y-6 text-lg md:text-xl leading-relaxed font-serif">
            <p>
              <strong className="text-brand hover:text-brand-yellow">Airdrie Gujarati Samaj</strong> is a nonprofit, cultural, and charitable association 
              established by the Gujarati community in Airdrie. It is dedicated to fostering <strong>community spirit</strong>, preserving our vibrant 
              <strong> Gujarati heritage</strong>, and creating a warm, inclusive environment for families and individuals of all ages.
            </p>
            <p>
              The organization hosts a variety of events throughout the year, including <strong>festivals, workshops, cultural performances</strong>, 
              and <strong>community gatherings</strong>. These events bridge generations, support newcomers, and strengthen the ties that bind the community.
            </p>
            <p>
              Beyond cultural celebrations, the Samaj actively promotes <strong>education and social welfare</strong> and builds strong relationships with 
              other cultural organizations in the area.
            </p>
            <p>
              Our mission is to foster a sense of <strong>belonging and pride</strong> among members and to promote an understanding and appreciation of Gujarati 
              culture to all members of the Airdrie community. Join us in <strong>honoring traditions, sharing stories</strong>, and building a united and 
              culturally rich Gujarati community in Airdrie — and beyond.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="Gujarati Community"
              className="rounded-3xl shadow-lg object-cover w-full h-auto max-h-[500px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center gap-16 mt-16 text-brand">
          <div className="flex flex-col items-center">
            <FaUsers className="text-6xl md:text-7xl mb-2 text-brand hover:text-brand-yellow transition" />
            <span className="font-semibold text-gray-800 text-lg md:text-xl">Community</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHandshake className="text-6xl md:text-7xl mb-2 text-brand hover:text-brand-yellow transition" />
            <span className="font-semibold text-gray-800 text-lg md:text-xl">Support</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-6xl md:text-7xl mb-2 text-brand hover:text-brand-yellow transition" />
            <span className="font-semibold text-gray-800 text-lg md:text-xl">Innovation</span>
          </div>
        </div>

        {/* Membership Call-to-Action */}
        <div className="bg-brand text-white p-12 rounded-3xl shadow-xl text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Become a Member</h3>
          <p className="mb-6 text-lg md:text-xl">
            Ready to be part of something meaningful? Enjoy exclusive events and community programs.
          </p>
          <a
            href="/membershipdetails"
            className="bg-yellow-400 hover:bg-yellow-300 text-brand font-semibold px-10 py-4 rounded-full shadow-md transition transform hover:scale-105 text-lg md:text-xl"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
