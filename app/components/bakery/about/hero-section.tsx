"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cookie } from "@/app/fonts/fonts";

export default function HeroSection() {
  return (
    <section className="w-full mt-24 xl:mt-12">
      <div className="bg-[#ad64ed] min-h-44 md:min-h-72 lg:min-h-[300px] flex items-center justify-center">
        <h1
          className={`text-5xl md:text-7xl lg:text-9xl font-bold text-white ${cookie.className}`}
        >
          About Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:max-w-[900px] xl:max-w-[1200px] mx-auto mt-10">
        <div className="w-full lg:w-1/2">
          <div className="w-full grid grid-cols-2 gap-3 xl:max-w-lg mx-auto px-2 lg:px-0">
            <motion.div
              className="text-start"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/about1.png"
                width={500}
                height={500}
                alt="About 1"
                className="rounded w-full"
              />
            </motion.div>

            <motion.div
              className="text-end"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/about2.png"
                width={375}
                height={500}
                alt="About 2"
                className="rounded w-3/4 mt-[25%]"
              />
            </motion.div>

            <motion.div
              className="text-end"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src="/about3.png"
                width={375}
                height={500}
                alt="About 3"
                className="rounded w-3/4 ml-[25%]"
              />
            </motion.div>

            <motion.div
              className="text-end"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Image
                src="/about4.png"
                width={500}
                height={500}
                alt="About 4"
                className="rounded w-full"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="max-w-4xl mx-auto xl:py-12 px-6">
            <h5 className="text-start text-[#ad64ed] font-semibold text-lg">
              About Us
            </h5>
            <h1 className="mb-4 text-xl md:text-4xl lg:text-3xl xl:text-4xl font-bold">
              Welcome to Bakery Shop
            </h1>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.div
                className="flex items-center border-l-4 border-[#ad64ed] px-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-2xl xl:text-5xl text-[#ad64ed] font-bold mb-0">
                  15
                </h1>
                <div className="pl-4">
                  <p className="mb-0 text-gray-600">Years of</p>
                  <h6 className="md:text-lg lg:text-sm xl:text-lg font-semibold uppercase">
                    Experience
                  </h6>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center border-l-4 border-[#ad64ed] px-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-2xl xl:text-5xl text-[#ad64ed] font-bold mb-0">
                  50
                </h1>
                <div className="pl-4">
                  <p className="mb-0 text-gray-600">Popular</p>
                  <h6 className="md:text-lg lg:text-sm xl:text-lg font-semibold uppercase">
                    Master Chefs
                  </h6>
                </div>
              </motion.div>
            </div>

            <button className="inline-block bg-[#ad64ed] text-white py-3 px-5 mt-2 rounded-lg shadow-lg hover:bg-pink-800 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
