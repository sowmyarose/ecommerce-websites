"use client";

import { useState } from "react";
import Header from "@/app/components/photography/header";
import { lusitana } from "@/app/fonts/fonts";
import Image from "next/image";
import BookingForm from "@/app/components/photography/booking";
import Contact from "@/app/components/photography/contact";

export default function Booking() {
  return (
    <div className={`w-full h-screen flex flex-col ${lusitana.className}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Image
          src="/photography/photographer-hero.jpg"
          alt="Photographer at work"
          width={1920}
          height={800}
          className="object-cover w-full h-[60vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">Booking</h1>
        </div>
      </section>

      {/* Form */}
      <BookingForm />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
