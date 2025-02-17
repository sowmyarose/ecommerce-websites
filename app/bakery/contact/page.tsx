"use client";
import { useState } from "react";
import { cookie } from "@/app/fonts/fonts";
import Header from "@/app/components/bakery/header";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-full lg:w-1/2 bg-[#eebe1b] shadow-lg rounded-lg p-6"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Message (Order Details)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg h-24"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#c693f2] text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition"
      >
        Submit Order
      </button>
    </form>
  );
};

export default function ContactPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full mt-24 xl:mt-16 bg-[#ad64ed] min-h-44 md:min-h-72 lg:min-h-[300px] flex items-center justify-center">
        <h1
          className={`text-5xl md:text-7xl lg:text-9xl font-bold text-white ${cookie.className}`}
        >
          Contact Us
        </h1>
      </section>

      {/* Form */}
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col lg:flex-row gap-10 items-start mt-10 text-black bg-white">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl lg:text-xl xl:text-3xl font-bold text-center mb-6">
            Order Your Cake Online
          </h2>
          <p className="text-gray-600 mb-6">
            Order custom cakes online with ease! Choose your favorite flavors,
            designs, and pickup or delivery options. Fill out the form below,
            and we&apos;ll get back to you with confirmation.
          </p>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
