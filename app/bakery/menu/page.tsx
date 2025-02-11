"use client";
import Header from "@/app/components/bakery/header";
import { cookie } from "@/app/fonts/fonts";
import Menu from "@/app/components/bakery/menu";
import Contact from "@/app/components/bakery/contact";

export default function MenuPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full mt-24 xl:mt-16 bg-[#ad64ed] min-h-44 md:min-h-72 lg:min-h-[300px] flex items-center justify-center">
        <h1
          className={`text-5xl md:text-7xl lg:text-9xl font-bold text-white ${cookie.className}`}
        >
          Our Menu
        </h1>
      </section>

      {/* Menu */}
      <Menu />

      {/* Contact */}
      <Contact />
    </div>
  );
}
