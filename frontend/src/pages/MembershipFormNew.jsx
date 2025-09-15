import React, { useState } from "react";

export default function MembershipFormNew() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    membershipType: "",
    firstName: "",
    lastName: "",
    dob: "",
    spouse: { name: "", dob: "" },
    kids: [{ name: "", age: "" }]
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle kid details update
  const handleKidChange = (index, field, value) => {
    const updatedKids = [...formData.kids];
    updatedKids[index][field] = value;
    setFormData({ ...formData, kids: updatedKids });
  };

  // Add new kid
  const addKid = () => {
    setFormData({ ...formData, kids: [...formData.kids, { name: "", age: "" }] });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Registration Submitted!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Step Indicator */}
      <div className="mb-4 text-gray-600">Step {step} of 5</div>

      {/* Step 1: Account (OAuth simulation) */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Create Account</h2>
          <button className="w-full bg-red-500 text-white p-2 rounded mb-2">
            Continue with Google
          </button>
          <button className="w-full bg-blue-600 text-white p-2 rounded mb-2">
            Continue with Microsoft
          </button>
          <button className="w-full bg-black text-white p-2 rounded mb-4">
            Continue with Apple
          </button>
          <button
            onClick={nextStep}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2: Membership Type */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Select Membership Type</h2>
          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select Membership --</option>
  
  <option value="student">
    Student Membership (Age 18–25) – $15.00 until 03/31/2026
  </option>
  
  <option value="senior_single">
    Senior Membership - Single (65+ Years) – $15.00 until 03/31/2026
  </option>
  
  <option value="senior_couple">
    Senior Membership - Couple (65+ Years) – $25.00 until 03/31/2026
  </option>
  
  <option value="adult_single">
    Adult Membership – $30.00 until 03/31/2026
  </option>
  
  <option value="family_one_adult">
    Family Membership - One Adult + Children under 18 – $25.00 until 03/31/2026
  </option>
  
  <option value="family_two_adults">
    Family Membership - Two Adults + Children under 18 – $40.00 until 03/31/2026
  </option>
          </select>
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Basic Info */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border p-2 mb-2 rounded"
          />
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Family Details */}
      {step === 4 && formData.membershipType === "family" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Family Details</h2>
          {/* Spouse */}
          <h3 className="font-semibold mb-2">Spouse</h3>
          <input
            placeholder="Spouse Name"
            value={formData.spouse.name}
            onChange={(e) =>
              setFormData({ ...formData, spouse: { ...formData.spouse, name: e.target.value } })
            }
            className="w-full border p-2 mb-2 rounded"
          />
          <input
            type="date"
            placeholder="Spouse DOB"
            value={formData.spouse.dob}
            onChange={(e) =>
              setFormData({ ...formData, spouse: { ...formData.spouse, dob: e.target.value } })
            }
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Kids */}
          <h3 className="font-semibold mb-2">Kids</h3>
          {formData.kids.map((kid, index) => (
            <div key={index} className="mb-2">
              <input
                placeholder="Kid Name"
                value={kid.name}
                onChange={(e) => handleKidChange(index, "name", e.target.value)}
                className="w-full border p-2 mb-1 rounded"
              />
              <input
                placeholder="Kid Age"
                value={kid.age}
                onChange={(e) => handleKidChange(index, "age", e.target.value)}
                className="w-full border p-2 mb-1 rounded"
              />
            </div>
          ))}
          <button
            onClick={addKid}
            className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
          >
            + Add Kid
          </button>

          <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
              Back
            </button>
            <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Review & Submit */}
      {step === 5 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
          <pre className="bg-gray-100 p-3 rounded text-sm">
            {JSON.stringify(formData, null, 2)}
          </pre>
          <div className="flex justify-between mt-4">
            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
              Back
            </button>
            <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
