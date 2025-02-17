"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "Wedding",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, date, message } = formData;

    if (!name || !email || !date || !message) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section className="w-full py-12">
      {submitted ? (
        <div className="text-center w-full h-full">
          <h3 className="text-xl font-semibold text-green-600">
            🎉 Booking Successful!
          </h3>
          <p className="text-gray-700 mt-2 mb-4">We will contact you soon.</p>
          <Link
            href="/photography"
            className="mt-4 px-6 py-3 bg-black text-white text-center rounded-lg text-lg font-semibold"
          >
            Home
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg md:max-w-xl mx-auto w-full px-4">
          <h2 className="text-lg md:text-3xl font-bold text-gray-800 mb-6 text-center border-b border-b-gray-200 p-3">
            Book a Photography Session
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Event Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
                <option>Portrait Session</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us more about your event..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
