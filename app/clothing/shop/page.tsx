"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/clothing/constants";
import Header from "@/app/components/clothing/header";
import ProductsList from "@/app/components/clothing/shop/products-list";
import ContactSection from "@/app/components/clothing/contact-section";

const types = [
  {
    name: "ethnic",
    title: "Ethnic",
    img: "/clothing/ethnic.png",
  },
  {
    name: "western",
    title: "Western",
    img: "/clothing/western.png",
  },
];

export default function Shop() {
  const [showAll, setShowAll] = useState(false);

  // Calculate number of products per row
  const productsPerRow = 4; // Adjust this based on `xl:grid-cols-4`
  const visibleProducts = showAll
    ? products
    : products.slice(0, productsPerRow * 2);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Discount */}
      <div className="w-full bg-gray-100 text-center md:text-lg font-bold text-black p-2 mt-20 md:mt-24">
        *** Upto 50% off on purchases above 2000 ***
      </div>

      {/* Hero-section */}
      <section className="w-full relative min-h-[250px] lg:min-h-[300px] xl:min-h-[400px] flex">
        <Image src="/clothing/shop1.png" alt="hero" fill objectFit="cover" />
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-black text-5xl font-bold z-30">Shop</h2>
        </div>
      </section>

      {/* Types */}
      <section className="w-full py-12">
        <div className="w-full md:max-w-2xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
          {types.map((type, index) => (
            <Link
              key={index}
              href={`/clothing/shop/${type.name}`}
              className="relative w-full md:w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-md cursor-pointer overflow-hidden flex group"
            >
              <Image
                src={type.img}
                alt={type.name}
                layout="fill"
                className="object-cover rounded-md transition-opacity duration-300 opacity-100 group-hover:grayscale"
              />

              {/* Hover Text */}
              <div className="absolute inset-0 flex items-end justify-center text-white font-semibold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {type.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto flex flex-col">
          <h2 className="text-2xl text-center font-bold">Our Products</h2>

          <ProductsList products={visibleProducts} type="all" />

          {/* View More Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-black underline px-6 py-3 "
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
