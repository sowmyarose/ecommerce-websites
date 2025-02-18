import Services from "@/app/components/photography/about/services";
import Contact from "@/app/components/photography/contact";
import Header from "@/app/components/photography/header";
import { lusitana } from "@/app/fonts/fonts";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={`w-full h-screen flex flex-col ${lusitana.className}`}>
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
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">About Us</h1>
        </div>
      </section>

      {/* How They Started */}
      <section className="py-12 px-6 max-w-screen-xl mx-auto bg-white text-black">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Journey
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          It all started with a passion for capturing moments. From the first
          time I picked up a camera, I knew this was something special. Over the
          years, my journey has taken me to numerous weddings, events, and
          photoshoots, where I&apos;ve had the privilege to capture life&apos;s
          most treasured moments.
        </p>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Today, I specialize in event photography, focusing on weddings,
          engagements, and other special occasions. My goal is to tell your
          story through timeless, stunning images.
        </p>
      </section>

      {/* Services */}
      <Services />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
