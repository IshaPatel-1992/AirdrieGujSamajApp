import React, { useEffect, useState } from "react";
import { api } from "../api";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await api.get("/api/events");
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <p className="mt-20 text-center text-lg font-medium text-brand">
        Loading Events...
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-brand-cream px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand">
            Upcoming Events
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with our latest community gatherings, celebrations, and special events.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="rounded-3xl bg-white shadow-md p-10 text-center text-gray-500 text-lg">
            No upcoming events available right now.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => {
              const eventDate = new Date(event.date);

              return (
                <article
                  key={event._id}
                  className="group overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative">
                    {event.image?.url ? (
                      <img
                        src={event.image.url}
                        alt={event.title}
                        className="h-50 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-56 w-full items-center justify-center bg-gray-200">
                        <span className="text-lg font-medium text-gray-500">
                          No Image
                        </span>
                      </div>
                    )}

                    {/* Date badge */}
                    <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-saffron">
                        {eventDate.toLocaleDateString("en-GB", { timeZone: "UTC", month: "short" })}
                      </p>
                      <p className="text-xl font-extrabold leading-none text-brand">
                        {eventDate.toLocaleDateString("en-GB", { timeZone: "UTC", day: "2-digit" })}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-gray-500">
                        {eventDate.toLocaleDateString("en-GB", { timeZone: "UTC", year: "numeric" })}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="line-clamp-2 text-2xl font-extrabold leading-snug text-brand">
                      {event.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {event.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
                      <p className="text-brand-saffron font-semibold">
                        {event.title === "Sundarkand Path"
                          ? new Date(event.date).toLocaleDateString("en-GB", {
                            timeZone: "UTC",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                          : new Date(event.date).toLocaleDateString("en-GB", {
                            timeZone: "UTC",
                            month: "long",
                            year: "numeric",
                          })}
                      </p>

                      {event.registrationOpen && event.registrationLink && (
                        <button
                          onClick={() => window.open(event.registrationLink, "_blank")}
                          className="rounded-full bg-brand-saffron px-4 py-2 text-sm font-semibold text-white"
                        >
                          Register / RSVP
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}