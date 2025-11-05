import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/gallery`);
        setPhotos(res.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-brand animate-pulse">
        Loading gallery...
      </div>
    );
  }

  return (
    <div id="gallery" className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-heading font-bold tracking-wide text-center text-brand mb-10">
        Gallery
      </h2>

      {photos.length === 0 ? (
        <p className="text-center text-gray-500">No photos available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={photo._id || idx}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer group border border-brand"
            >
              <img
                src={photo.imageUrl}
                alt={photo.caption || "Event photo"}
                loading="lazy"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-brand text-brand-text p-3 text-center">
                <p className="text-sm font-medium">
                  {photo.caption || `${photo.event?.title || "Event"} (${new Date(photo.event?.date).getFullYear()})`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-center text-gray-500">
        Photos are from past events celebrating our vibrant community.
      </p>
    </div>
  );
}
