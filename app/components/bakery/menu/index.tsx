"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { lusitana } from "@/app/fonts/fonts";

const tabs = [
  {
    id: "tab-1",
    icon: "/cupcake.png",
    label: "Cup Cakes",
    subLabel: "Popular",
  },
  {
    id: "tab-2",
    icon: "/birthday.png",
    label: "Birthday Cakes",
    subLabel: "Special",
  },
  {
    id: "tab-3",
    icon: "/wedding.png",
    label: "Wedding Cakes",
    subLabel: "Lovely",
  },
];

const cakes = [
  { name: "Chocolate Fudge Cake", price: "$12.99", img: "/chocfudge.png" },
  { name: "Red Velvet Cake", price: "$16.99", img: "/redvelvet.png" },
  { name: "Lemon Drizzle Cake", price: "$20.99", img: "/lemon.png" },
  { name: "Strawberry Shortcake", price: "$18.99", img: "/strawberry.png" },
  { name: "Mango Delight Cake", price: "$22.99", img: "/mango.png" },
  { name: "Tiramisu Cake", price: "$25.99", img: "/tiramisu.png" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <section className="w-full mt-8 mb-8">
      <div className="flex flex-col w-full lg:max-w-[900px] xl:max-w-[1200px] mx-auto mt-10 items-center justify-center">
        <h2 className={`text-3xl font-semibold ${lusitana.className}`}>
          Most Popular Items
        </h2>

        {/* Types */}
        <ul className="flex flex-col md:flex-row justify-center md:border-b mb-5 mt-5 gap-4">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item">
              <button
                className={`flex items-center text-start mx-3 pb-3 ${
                  activeTab === tab.id
                    ? "border-b-2 border-b-[#ad64ed] text-primary"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="w-16 h-16 relative flex">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="pl-3">
                  <small className="text-gray-500">{tab.subLabel}</small>
                  <h6 className="mt-0 mb-0 font-semibold">{tab.label}</h6>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-2">
          {cakes.map((cake, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white overflow-hidden p-4 flex text-black"
            >
              <Image
                className="flex-shrink-0 rounded"
                src={cake.img}
                alt={cake.name}
                width={80}
                height={80}
              />
              <div className="w-full flex flex-col text-start pl-4">
                <h5 className="flex justify-between border-b pb-2 text-lg font-semibold">
                  <span>{cake.name}</span>
                  <span className="text-primary">{cake.price}</span>
                </h5>
                <small className="italic text-gray-600">
                  Ipsum ipsum clita erat amet dolor justo diam
                </small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
