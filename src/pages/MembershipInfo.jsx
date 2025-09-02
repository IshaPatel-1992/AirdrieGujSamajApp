import React from "react";

export default function MembershipInfo() {
  const fees = [
    { type: "Family Membership", amount: "$40" },
    { type: "Single Adult Membership", amount: "$30" },
    { type: "Student Membership", amount: "$20" },
    { type: "Senior Couple Membership", amount: "$25" },
    { type: "Family Members - One Adult and Children under 18 years", amount: "$25" },
    { type: "Senior Single Membership", amount: "$15" },
  ];

  return (
    <div id="membershipinfo" className="p-6 sm:p-10 max-w-4xl mx-auto animate-fadeIn text-brand">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center text-brand mb-10">Membership</h2>
      <p className="mb-6 text-lg leading-relaxed font-sans text-gray-700 text-center">
        Join Airdrie Gujarati Samaj to celebrate tradition and unity. Your membership supports our cultural programs and events.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-brand text-center">Membership Fees</h3>
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 mb-8">
        <table className="min-w-full text-left bg-white text-brand">
          <thead className="bg-brand text-white">
            <tr>
              <th className="py-3 px-4 sm:px-6 whitespace-nowrap">Membership Type</th>
              <th className="py-3 px-4 sm:px-6 whitespace-nowrap">Fee</th>
            </tr>
          </thead>
          <tbody>
            {fees.map(({ type, amount }, i) => (
              <tr key={type} className={`${i % 2 === 0 ? 'bg-yellow-50' : 'bg-white'} hover:bg-yellow-100`}>
                <td className="py-3 px-4 sm:px-6 whitespace-nowrap">{type}</td>
                <td className="py-3 px-4 sm:px-6 font-semibold whitespace-nowrap">{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <p className="mb-4 text-lg font-medium text-brand">Ready to join? Fill out our membership application form now!</p>
        <a href="/membershipform" className="inline-block w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 hover:scale-105 transform transition duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg">
          Apply Now 📝
        </a>
      </div>
    </div>
  );
}
