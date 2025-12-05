import React, { useEffect, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold mb-10">Events</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map(event => (
          <div key={event._id} className="shadow-lg rounded-xl p-6 bg-white">
            <img
              src={event.image.url}
              alt={event.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
            { /* <p className="text-brand-saffron font-semibold mt-2">
              {event.date}
            </p> */ }
            <p className="text-brand-saffron font-semibold mt-2">
              {new Date(event.date).toLocaleString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
