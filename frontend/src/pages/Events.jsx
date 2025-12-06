import React, { useEffect, useState } from "react";
import { api } from "../api"; // centralized API helper like OurTeam

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await api.get("/api/events"); // ✅ using api.get
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading Events...</p>;

  return (
    <section className="py-24 px-6 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-brand">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event._id}
              className="shadow-lg rounded-2xl p-6 bg-white transform hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              {event.image?.url ? (
                <img
                  src={event.image.url}
                  alt={event.title}
                  className="w-full rounded-xl mb-4 object-cover max-h-60"
                />
              ) : (
                <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-xl mb-4">
                  <span className="text-gray-500 text-xl">No Image</span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-brand mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.description}</p>

              <p className="text-brand-saffron font-semibold mt-2">
                {new Date(event.date).toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
