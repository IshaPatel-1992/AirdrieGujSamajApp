import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-teal-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-700">What Our Clients Say</h2>
        <blockquote className="mt-8 italic text-gray-700">
          “Janvi Technologies revolutionized our online presence with professionalism and creativity.”
        </blockquote>
        <cite className="block mt-4 text-teal-800 font-semibold">— Satisfied Client</cite>
      </div>
    </section>
  );
}
