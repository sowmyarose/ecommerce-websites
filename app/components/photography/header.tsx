"use client";
import { useEffect, useState } from "react";
import { lusitana } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { title: "About Us", href: "/photography/about" },
  { title: "Shop", href: "/photography/shop" },
  { title: "Booking", href: "/photography/booking" },
];

const socialMedia = [
  {
    name: "facebook",
    img: "/photography/facebook-white.svg",
    scrolledImg: "/photography/facebook.svg",
  },
  {
    name: "instagram",
    img: "/photography/instagram-white.svg",
    scrolledImg: "/photography/instagram.svg",
  },
  {
    name: "pinterest",
    img: "/photography/pinterest-white.svg",
    scrolledImg: "/photography/pinterest.svg",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Large */}
      <div
        className={`hidden md:flex flex-row justify-between items-center w-full h-full px-6 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-gray-50 shadow-lg py-4 text-black"
            : "bg-transparent py-8 text-white"
        } ${lusitana.className} min-h-24`}
      >
        {/* Title */}
        <Link href="/photography" className={`md:text-2xl xl:text-4xl`}>
          The Photographer
        </Link>

        {/* Menu */}
        <div className="flex flex-row items-center gap-4 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
          {menu.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`hover:scale-105 transform transition-all duration-300 lg:text-lg ${
                  isActive
                    ? `border-b-2 ${
                        isScrolled ? "border-b-black" : "border-b-white"
                      }`
                    : ""
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Image
                src={isScrolled ? media.scrolledImg : media.img}
                alt={media.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Small */}
      <div
        className={`flex md:hidden flex-row justify-between items-center w-full h-full px-4 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-gray-50 shadow-lg py-4" : "bg-transparent py-8"
        } ${lusitana.className} min-h-20`}
      >
        {/* Title */}
        <Link
          href="/photography"
          className={`text-xl ${isScrolled ? "text-black" : "text-white"}`}
        >
          The Photographer
        </Link>

        {/* Menubar */}
        <button onClick={() => setIsOpen(true)}>
          <Image
            src={isScrolled ? "/bars-solid.svg" : "/clothing/bars-white.svg"}
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
              className="w-full bg-white text-black shadow-lg fixed top-24 left-0"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl font-bold"
              >
                ×
              </button>
              <div className="flex flex-col items-start gap-8 mt-10 p-6">
                {menu.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`hover:scale-105 transform transition-all duration-300 lg:text-lg`}
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
