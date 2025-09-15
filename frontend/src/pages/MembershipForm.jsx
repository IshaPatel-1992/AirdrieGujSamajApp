import React, { useState } from "react";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    membershipType: "",
    familyMembers: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: integrate with backend or form handler (e.g., EmailJS or Firebase)
  };

  return (
    <div className="max-w-3xl mx-auto p-6 animate-fadeIn">
      <h2 className="text-3xl font-heading font-bold text-center text-brand mb-6">
        Membership Application
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
      >
        <div className="mb-4">
          <label className="block text-brand font-semibold mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-light"
          />
        </div>

        <div className="mb-4">
          <label className="block text-brand font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-light"
          />
        </div>

        <div className="mb-4">
          <label className="block text-brand font-semibold mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-light"
          />
        </div>

        <div className="mb-4">
          <label className="block text-brand font-semibold mb-1" htmlFor="membershipType">
            Membership Type
          </label>
          <select
            id="membershipType"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-light"
          >
            <option value="">Select a type</option>
            <option value="Family">Family Membership - $40</option>
            <option value="Single Adult">Single Adult Membership - $30</option>
            <option value="Student">Student Membership - $20</option>
            <option value="Senior Couple">Senior Couple Membership - $25</option>
            <option value="Family One Adult">One Adult + Children - $25</option>
            <option value="Senior Single">Senior Single Membership - $15</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-brand font-semibold mb-1" htmlFor="familyMembers">
            Names of Family Members (if applicable)
          </label>
          <textarea
            id="familyMembers"
            name="familyMembers"
            value={formData.familyMembers}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-light"
            placeholder="List names separated by commas"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-brand font-semibold mb-1" htmlFor="message">
            Message or Questions (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-light"
            placeholder="Write any additional message here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
