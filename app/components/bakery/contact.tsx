"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/cake2.jpg",
  "/cake3.jpg",
  "/cake4.jpg",
  "/cake5.jpg",
  "/cake6.jpg",
  "/cake7.jpg",
];

export default function Contact() {
  return (
    <section className="w-full p-12 lg:p-20 xl:p-24 bg-[#eebe1b] flex flex-col gap-6">
      {/* Instagram */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="md:text-lg font-bold text-white text-center">
          Follow Us on Instagram
        </p>
        <button className="text-white px-6 py-3 text-4xl rounded-full font-bold hover:scale-105 transform transition-all duration-300">
          #bakeryshop
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:p-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg flex w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white text-lg font-semibold">
                  Image {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact details */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
          <p className="text-gray-700 md:text-xl text-white">
            123 Sweet Street, Bakery Town
          </p>
          <p className="text-gray-700 md:text-xl text-white">(123) 456-7890</p>
          <p className="text-gray-700 md:text-xl text-white">
            contact@cakeshop.com
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
          <p className="text-gray-700 md:text-xl text-white">
            Mon - Fri 8:00 AM - 6:00 PM
          </p>
          <p className="text-gray-700 md:text-xl text-white">
            Sat & Sun 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
