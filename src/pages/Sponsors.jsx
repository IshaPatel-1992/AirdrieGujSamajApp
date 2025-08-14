import React from 'react';

import title1 from '../assets/sponsors/TitleSponsors/SonaliJewellersGujaratTitleSp1.jpg';
import gold1 from '../assets/sponsors/GoldSponsors/JayanNaikerRealtorGoldSp1.jpg';
import gold2 from '../assets/sponsors/GoldSponsors/KirtiKumarSoniAccountantGoldSp2.jpg';
import silver1 from '../assets/sponsors/SilverSponsors/MitalPatelRealtorSilverSp1.jpg';
import silver2 from '../assets/sponsors/SilverSponsors/DarshanNashitSilverSp2.jpg';
import silver3 from '../assets/sponsors/SilverSponsors/JainishParmarOpticianSilverSp3.jpg.jpg';

// Sponsor arrays
const titleSponsors = [
  { name: 'Sonali Jewellers', image: title1 },
];
const goldSponsors = [
  { name: 'Jayan Naiker - Realtor', image: gold1 },
  { name: 'Kirti Kumar Soni - Accountant', image: gold2 },
];
const silverSponsors = [
  { name: 'Mital Patel - Realtor', image: silver1 },
  { name: 'Darshan Nashit', image: silver2 },
  { name: 'Jainish Parmar - Optician', image: silver3 },
];

const SponsorGroup = ({ title, sponsors, imageClass, color }) => (
  <div className="mb-20">
    <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-10 relative`}>
      <span className={`px-3 py-1 rounded-lg`} style={{ backgroundColor: color, color: '#fff' }}>
        {title}
      </span>
    </h3>
    <div className="flex flex-wrap justify-center gap-8 px-4">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-white via-[#fffaf5] to-[#fef5e7] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center max-w-[240px] p-4 border border-yellow-100 animate-fadeIn"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className={`rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ${imageClass}`}
          />
          <p className="mt-3 text-sm sm:text-base font-semibold text-brand tracking-wide">
            {sponsor.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function SponsorsSection() {
  return (
    <section className="bg-[#fff8f1] py-20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand mb-20 tracking-wide">
          Our Valued Sponsors
        </h2>

        <SponsorGroup
          title="Title Sponsor"
          sponsors={titleSponsors}
          imageClass="h-auto w-full max-w-[280px] sm:max-w-[320px] object-contain"
          color="#b68b2d"
        />

        <div className="my-12 border-t border-yellow-300 w-1/2 mx-auto"></div>

        <SponsorGroup
          title="Gold Sponsors"
          sponsors={goldSponsors}
          imageClass="h-auto w-full max-w-[240px] sm:max-w-[280px] object-contain"
          color="#d4af37"
        />

        <div className="my-12 border-t border-yellow-300 w-1/2 mx-auto"></div>

        <SponsorGroup
          title="Silver Sponsors"
          sponsors={silverSponsors}
          imageClass="h-auto w-full max-w-[200px] sm:max-w-[240px] object-contain"
          color="#c0c0c0"
        />
      </div>
    </section>
  );
}
