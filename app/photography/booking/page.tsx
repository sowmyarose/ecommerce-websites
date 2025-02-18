"use client";

import { useState } from "react";
import Header from "@/app/components/photography/header";
import { lusitana } from "@/app/fonts/fonts";
import Image from "next/image";
import BookingForm from "@/app/components/photography/booking";
import Contact from "@/app/components/photography/contact";

export default function Booking() {
  return (
    <div
      className={`w-full h-screen flex flex-col ${lusitana.className} bg-white`}
    >
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
          className="object-cover w-full h-[30vh]"
        />
      </section>

      {/* Form */}
      <BookingForm />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
