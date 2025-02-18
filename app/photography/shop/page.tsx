"use client";
import Contact from "@/app/components/photography/contact";
import Header from "@/app/components/photography/header";
import { lusitana } from "@/app/fonts/fonts";
import { photos } from "@/app/lib/photography/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Shop() {
  const router = useRouter();

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
          className="object-cover w-full h-[60vh]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Shop Our Photography
          </h1>
        </div>
      </section>

      {/* Photos List */}
      <section className="w-full py-12 bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 px-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${
                index === 0 || index === 4 ? "row-span-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push(`/photography/shop/${photo.id}`)}
            >
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-sm lg:text-lg font-semibold">
                  {photo.title}
                </h3>
                <p className="text-sm">{photo.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
