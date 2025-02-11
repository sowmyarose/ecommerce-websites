"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { greatVibes } from "@/app/fonts/fonts";

const menu = [
  { title: "Home", href: "/bakery" },
  { title: "About", href: "/bakery/about" },
  { title: "Menu ", href: "/bakery/menu" },
  { title: "Order Online ", href: "/bakery/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Large */}
      <div className="hidden md:flex flex-row justify-between items-center w-full h-full text-black px-6 bg-white min-h-24">
        <Image src="/bakery-logo.png" alt="logo" width={100} height={50} />

        {/* Menu */}
        <div className="flex flex-row items-center gap-8">
          {menu.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`${
                  greatVibes.className
                } text-lg lg:text-2xl font-bold hover:border-b-2 hover:border-[#c693f2] ${
                  isActive ? "border-b-2 border-[#c693f2]" : ""
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Small */}
      <div className="flex md:hidden flex-row justify-between items-center w-full h-full px-4 bg-white min-h-20">
        {/* Menu */}
        <Image src="/bakery-logo.png" alt="logo" width={100} height={50} />

        <button onClick={() => setIsOpen(true)}>
          <Image
            src="/bars-solid.svg"
            alt="menu"
            width={24}
            height={24}
            className="block lg:hidden"
          />
        </button>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full bg-white shadow-lg fixed top-24 left-0"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl"
              >
                ×
              </button>
              <div className="flex flex-col items-center gap-8 mt-12 p-6">
                {menu.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`${greatVibes.className} text-2xl font-bold hover:border-b-2 hover:border-[#c693f2]`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </header>
  );
}
