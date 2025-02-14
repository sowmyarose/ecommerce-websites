"use client";
import { anton } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "./drawer";
import { products } from "@/app/lib/clothing/constants";

const menu = [
  { title: "Shop ", href: "/clothing/shop" },
  { title: "About Us", href: "/clothing/about" },
  { title: "Contact Us", href: "/clothing/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Large */}
      <div className="hidden md:flex flex-row justify-between items-center w-full h-full text-black px-6 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] min-h-24">
        {/* Menu */}
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          {menu.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={`${anton.className} text-white font-bold hover:scale-105 transform transition-all duration-300 md:text-sm lg:text-base`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Title */}
        <Link
          href="/clothing"
          className={`${anton.className} md:text-xl lg:text-2xl absolute left-1/2 transform -translate-x-1/2 text-white`}
        >
          The Loom Fashions
        </Link>

        {/* Cart */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenCart(true)}
        >
          <Image
            src="/clothing/bag-white.svg"
            alt="cart"
            width={25}
            height={25}
          />
        </div>
      </div>

      {/* Small */}
      <div className="flex md:hidden flex-row justify-between items-center w-full h-full px-4 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] min-h-20">
        {/* Menubar */}
        <button onClick={() => setIsOpen(true)}>
          <Image
            src="/clothing/bars-white.svg"
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
              <div className="flex flex-col items-start gap-8 mt-10 p-6">
                {menu.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`${anton.className} text-lg font-bold hover:border-b-2 hover:border-[#c693f2]`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}

        {/* Title */}
        <Link
          href="/clothing"
          className={`${anton.className} text-lg text-white`}
        >
          The Loom Fashions
        </Link>

        {/* Cart */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenCart(true)}
        >
          <Image
            src="/clothing/bag-white.svg"
            alt="cart"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Drawer */}
      {openCart && (
        <Drawer
          {...{ openCart, setOpenCart, openCheckout, setOpenCheckout }}
          product={products[0]}
        />
      )}
    </header>
  );
}
