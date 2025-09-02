import React, { useState } from 'react';

// Images
import title1 from '../assets/sponsors/TitleSponsors/SonaliJewellersGujaratTitleSp1.jpg';
import gold1 from '../assets/sponsors/GoldSponsors/JayanNaikerRealtorGoldSp1.jpg';
import gold2 from '../assets/sponsors/GoldSponsors/KirtiKumarSoniAccountantGoldSp2.jpg';
import gold3 from '../assets/sponsors/GoldSponsors/DhavalPatelRealtorGoldSp3.jpg';
import gold4 from '../assets/sponsors/GoldSponsors/Team-Elevation-AirdrieGoldSp4.png';
import silver1 from '../assets/sponsors/SilverSponsors/MitalPatelRealtorSilverSp1.jpg';
import silver2 from '../assets/sponsors/SilverSponsors/DarshanNashitSilverSp2.jpg';
import silver3 from '../assets/sponsors/SilverSponsors/JainishParmarOpticianSilverSp3.jpg.jpg';
import silver4 from '../assets/sponsors/SilverSponsors/DhrumilPurohitRealtorSilveSp4.jpg';
import silver5 from '../assets/sponsors/SilverSponsors/KamilVyasSilverSp5.jpg';
import silver6 from '../assets/sponsors/SilverSponsors/iDriveAlbertaSilverSp6.jpg';
import silver7 from '../assets/sponsors/SilverSponsors/Ankit-Patel-RealtorSilveSp7.jpg';
import silver8 from '../assets/sponsors/SilverSponsors/Ishan-BMOSilverSp8.jpg';

// Sponsor arrays
const titleSponsors = [{ name: 'Sonali Jewellers', image: title1 }];
const goldSponsors = [
  { name: 'Jayan Naiker - Realtor', image: gold1 },
  { name: 'Kirti Kumar Soni - Accountant', image: gold2 },
  { name: 'Dhaval Patel - Realtor', image: gold3 },
  { name: 'Team Elevation', image: gold4 },
];
const silverSponsors = [
  { name: 'Mital Patel - Realtor', image: silver1 },
  { name: 'Darshan Nashit', image: silver2 },
  { name: 'Jainish Parmar - Optician', image: silver3 },
  { name: 'Dhrumil Purohit - Realtor', image: silver4 },
  { name: 'Kamil Vyas', image: silver5 },
  { name: 'iDrive Alberta', image: silver6 },
  { name: 'Ankit Patel - Realtor', image: silver7 },
  { name: 'Ishan BMO', image: silver8 },
];

const SponsorGroup = ({ title, sponsors, color, onSponsorClick }) => {
  // Grid layout
  const gridClasses =
    title === 'Title Sponsor'
      ? 'grid grid-cols-1 max-w-lg mx-auto' // Single column
      : 'grid sm:grid-cols-2 md:grid-cols-3 gap-8';

  return (
    <div className="mb-16">
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        <span
          className="px-4 py-1 rounded-lg shadow"
          style={{ backgroundColor: color, color: '#fff' }}
        >
          {title}
        </span>
      </h3>

      {/* Sponsors Grid */}
      <div className={`${gridClasses} gap-8`}>
        {sponsors.map((sponsor, index) => {
          let borderClasses = '';
          if (title === 'Title Sponsor') {
            borderClasses = 'border-4 border-yellow-500 shadow-yellow-300';
          } else if (title === 'Gold Sponsors') {
            borderClasses =
              'border-4 border-yellow-400 shadow-lg shadow-yellow-200';
          } else if (title === 'Silver Sponsors') {
            borderClasses =
              'border-4 border-gray-300 shadow-lg shadow-gray-200';
          }

          return (
            <div
              key={index}
              onClick={() => onSponsorClick(sponsor)}
              className={`relative overflow-hidden rounded-2xl bg-white group cursor-pointer hover:shadow-xl transition duration-300 ${borderClasses}`}
            >
              <div className="flex justify-center items-center h-48 bg-white p-4">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm sm:text-base font-semibold text-brand tracking-wide text-center">
                  {sponsor.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function SponsorsSection() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  return (
    <section id= "sponsors" className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-brand mb-16 tracking-tight">
          Our Valued Sponsors
        </h2>

        {/* Title Sponsor */}
        <SponsorGroup
          title="Title Sponsor"
          sponsors={titleSponsors}
          color="#b68b2d"
          onSponsorClick={setSelectedSponsor}
        />

        {/* Gold Sponsors */}
        <SponsorGroup
          title="Gold Sponsors"
          sponsors={goldSponsors}
          color="#d4af37"
          onSponsorClick={setSelectedSponsor}
        />

        {/* Silver Sponsors */}
        <SponsorGroup
          title="Silver Sponsors"
          sponsors={silverSponsors}
          color="#c0c0c0"
          onSponsorClick={setSelectedSponsor}
        />
      </div>

      {/* Modal */}
      {selectedSponsor && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSponsor(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full text-center relative transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedSponsor(null)}
            >
              &times;
            </button>
            <img
              src={selectedSponsor.image}
              alt={selectedSponsor.name}
              className="w-full max-h-[70vh] object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-brand">
              {selectedSponsor.name}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
