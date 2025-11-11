import React from "react";

// Helper to import all images from a folder using Webpack
function importAll(r) {
  return r.keys().map(r);
}

const galleryData = {
  Navratri: importAll(require.context("../assets/Events/Gallery/Navratri2025/", false, /\.(jpg|jpeg|png)$/)),
  Picnic: importAll(require.context("../assets/Events/Gallery/Picnic2025/", false, /\.(jpg|jpeg|png)$/)),
};

export default function Gallery() {
  const categories = Object.keys(galleryData);

  return (
    <div id="gallery" className="p-6 max-w-6xl mx-auto">
      {/* Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-16 text-brand tracking-tight">
          Gallery
        </h2>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold text-brand mb-6">{category}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryData[category].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group border border-brand"
              >
                <img
                  src={img}
                  alt={`${category} ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <p className="mt-8 text-center text-gray-500">
        Photos are from past events celebrating our vibrant community.
      </p>
    </div>
  );
}
