import React from 'react';
import { FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';
import aboutImage from '../assets/AboutUs/Team1.jpg'; // replace with your image path

export default function AboutSection() {
  return (
    <section id="aboutsection" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 animate-fadeIn">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-16 text-brand tracking-tight">
          About Us
        </h2>

        {/* Content and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="lg:w-1/2 text-brand-text space-y-6 text-lg md:text-xl leading-relaxed font-serif">
            <p>
              <strong className="text-brand hover:text-brand-saffron">Airdrie Gujarati Samaj</strong> is a nonprofit, cultural, and charitable association 
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
          {[
            { icon: FaUsers, label: 'Community' },
            { icon: FaHandshake, label: 'Support' },
            { icon: FaLightbulb, label: 'Innovation' },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <Icon className="text-6xl md:text-7xl mb-2 text-brand hover:text-brand-green transition" />
              <span className="font-semibold text-brand-text text-lg md:text-xl">{label}</span>
            </div>
          ))}
        </div>

        {/* Membership Call-to-Action */}
        <div className="bg-gradient-to-r from-brand-mint to-brand-cream text-brand-text p-12 rounded-3xl shadow-2xl text-center mt-20 space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold">Become a Member</h3>
          <p className="text-lg md:text-xl font-medium">
            Ready to be part of something meaningful? Enjoy exclusive events and community programs.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/membershipinfo"
              className="bg-brand-saffron hover:bg-brand-yellow text-brand-text font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105 text-lg md:text-xl inline-block"
            >
              Join Us
            </a>

            {/* 👇 New “Our Team” Button */}
            <a
              href="/ourteam"
              className="bg-white hover:bg-brand-cream text-brand-text font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105 text-lg md:text-xl inline-block border border-brand-saffron"
            >
              Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
