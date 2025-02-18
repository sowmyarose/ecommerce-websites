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
      <section className="w-full mt-20 py-8 md:mt-24 px-2 md:px-4 bg-white">
        <div className="bg-[#ad64ed] flex items-center justify-center rounded-[50px] py-12">
          <h1
            className={`text-5xl md:text-7xl lg:text-9xl font-bold text-white ${cookie.className}`}
          >
            Our Menu
          </h1>
        </div>
      </section>

      {/* Menu */}
      <Menu />

      {/* Contact */}
      <Contact />
    </div>
  );
}
