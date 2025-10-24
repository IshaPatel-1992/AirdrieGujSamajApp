import React from 'react';

const photos = [
  {
    src: 'https://source.unsplash.com/800x600/?festival,celebration',
    alt: 'Diwali Celebration',
    caption: 'Diwali Celebration 2025',
  },
  {
    src: 'https://source.unsplash.com/800x600/?dance,garba',
    alt: 'Navaratri Celebration',
    caption: 'Navaratri Garba Night 2025',
  },
  {
    src: 'https://source.unsplash.com/800x600/?picnic,outdoor',
    alt: 'Community Picnic',
    caption: 'Annual Community Picnic 2025',
  },
];

export default function Gallery() {
  return (
    <div id="gallery" className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-heading font-bold tracking-wide text-center text-brand mb-10">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map(({ src, alt, caption }, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer group border border-brand"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="bg-brand text-brand-text p-3 text-center">
              <p className="text-sm font-medium">{caption}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-gray-500">
        Photos are from past events celebrating our vibrant community.
      </p>
    </div>
  );
}
