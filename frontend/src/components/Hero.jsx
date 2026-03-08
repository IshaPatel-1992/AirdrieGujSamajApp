import React from "react";
import heroImage from "../assets/banners/SudarkandEvent2026.png";
import UIButton from "./ui/UIButtons";

export default function Hero() {
  return (
    <>
      {/* ================= MOBILE / TABLET ================= */}
      <section className="lg:hidden bg-gradient-to-b from-[#2a120d] via-[#3a1710] to-[#2a120d]">
        <div className="px-4 pt-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[28px]">
            <img
              src={heroImage}
              alt="Sundarkand event banner"
              className="w-full h-[240px] sm:h-[320px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a120d]/70 via-transparent to-transparent" />
          </div>
        </div>

        <div className="px-4 sm:px-6 pt-4 pb-8">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl px-5 py-5 text-center">
            <p className="text-sm font-semibold text-brand-saffron">
              Welcome to
            </p>

            <h1 className="mt-1 text-3xl sm:text-4xl font-heading font-extrabold leading-tight text-white">
              Airdrie Gujarati Samaj
            </h1>

            <p className="mt-3 text-sm sm:text-base leading-6 text-white/90">
              A community rooted in culture, devotion, and togetherness
            </p>
          </div>

          <div className="mt-4 rounded-3xl overflow-hidden border border-white/10 bg-[#3a140fe8] shadow-xl backdrop-blur-md">
            <div className="bg-gradient-to-r from-brand-saffron to-brand-green px-5 py-3">
              <p className="text-white text-sm font-bold">
                Free Community Event
              </p>
            </div>

            <div className="px-5 py-5 text-center">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Sundarkand Path
              </h2>

              <div className="mt-5 space-y-2">
                <p className="text-base sm:text-lg font-semibold text-white">
                  Saturday, 18 April 2026
                </p>
                <p className="text-base sm:text-lg font-semibold text-white">
                  4:00 PM
                </p>
                <p className="text-base sm:text-lg font-semibold text-white">
                  Town &amp; Country Community Hall
                </p>
                <p className="text-sm sm:text-base leading-6 text-white/95">
                  275 Jensen Dr NE, Airdrie, AB T4A 1K9
                </p>
              </div>

              <p className="mt-4 text-sm sm:text-base leading-6 text-white/85">
                Join us for a devotional gathering and community prayer.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                <UIButton to="/events" variant="saffron">
                  RSVP
                </UIButton>
                <UIButton to="/contact" variant="green">
                  Contact Us
                </UIButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESKTOP ================= */}
      <section
        className="relative hidden min-h-[88vh] overflow-hidden bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

        {/* Center content zone */}
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center justify-center px-6 xl:px-10">
          <div className="w-full max-w-[540px]">
            {/* Welcome card */}
            <div className="rounded-[28px] border border-white/10 bg-black/34 px-7 py-6 text-center shadow-2xl backdrop-blur-md">
              <p className="text-sm font-semibold text-brand-saffron lg:text-base">
                Welcome to
              </p>

              <h1 className="mt-1 text-4xl font-heading font-extrabold leading-tight text-white xl:text-5xl">
                Airdrie Gujarati Samaj
              </h1>

              <p className="mt-3 text-base leading-7 text-white/90 xl:text-lg">
                A community rooted in culture, devotion, and togetherness
              </p>
            </div>

            {/* Event card */}
            <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#2b130fcc] shadow-2xl backdrop-blur-md">
              <div className="bg-gradient-to-r from-brand-saffron to-brand-green px-6 py-3">
                <p className="text-sm font-bold text-white xl:text-base">
                  Free Community Event
                </p>
              </div>

              <div className="px-6 py-6 text-center">
                <h2 className="text-3xl font-heading font-extrabold text-white xl:text-[34px]">
                  Sundarkand Path
                </h2>

                <div className="mt-5 space-y-2">
                  <p className="text-base sm:text-lg font-semibold text-white">
                    Saturday, 18 April 2026
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    4:00 PM
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    Town &amp; Country Community Hall
                  </p>
                  <p className="text-sm sm:text-base leading-6 text-white/95">
                    275 Jensen Dr NE, Airdrie, AB T4A 1K9
                  </p>
                </div>

                <p className="mt-5 text-base leading-7 text-white/85">
                  Join us for a devotional gathering and community prayer.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <UIButton to="/events" variant="saffron">
                    Event Details
                  </UIButton>
                  <UIButton to="/contact" variant="green">
                    Contact Us
                  </UIButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}