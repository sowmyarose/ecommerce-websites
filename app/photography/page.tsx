import Image from "next/image";
import Link from "next/link";
import { lusitana } from "../fonts/fonts";
// Components
import Header from "../components/photography/header";
import HeroSection from "../components/photography/hero-section";
import FeaturedCollections from "../components/photography/featured";
import Contact from "../components/photography/contact";

export default function Photography() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collections */}
      <FeaturedCollections />

      {/* About the Photographer */}
      <section className={`py-12 bg-black text-white ${lusitana.className}`}>
        <div className="px-6 xl:max-w-screen-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Meet the Photographer
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center py-6">
            <Image
              src="/photography/photographer.jpg"
              alt="Photography Showcase"
              width={400}
              height={500}
              className="rounded-lg md:w-1/2 items-center"
            />
            <p className="max-w-2xl mx-auto md:mt-8 text-lg md:text-2xl">
              Passionate about capturing the world’s beauty, I offer
              high-quality photographs for art lovers and collectors.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center bg-white px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-black">
          Ready to Elevate Your Space or Capture Special Moments?
        </h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 px-4">
          <Link
            href="/photography/shop"
            className="mt-4 px-6 py-3 bg-black text-white rounded-lg text-lg font-semibold"
          >
            Browse Collection
          </Link>
          <Link
            href="/photography/booking"
            className="mt-4 px-6 py-3 bg-transparent text-black border border-black rounded-lg text-lg font-semibold"
          >
            Book An Event
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
