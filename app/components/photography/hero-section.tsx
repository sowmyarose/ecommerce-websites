import { lusitana } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] xl:min-h-[800px] flex text-white bg-black">
      <Image
        src="/photography/hero_photo.jpg"
        alt="Photography Showcase"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div
        className={`absolute top-[25%] md:left-10 z-10 p-6 ${lusitana.className}`}
      >
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
          Stunning Photography
        </h1>
        <p className="text-xl lg:text-2xl mb-8">
          For Events, Prints & Digital Downloads
        </p>
        <div className="gap-4 flex flex-col md:flex-row">
          <Link
            href="/photography/shop"
            className="mt-4 px-6 py-3 bg-white text-black text-center rounded-lg text-lg font-semibold"
          >
            Browse Collection
          </Link>
          <Link
            href="/photography/booking"
            className="mt-4 px-6 py-3 bg-transparent text-white text-center border border-white rounded-lg text-lg font-semibold"
          >
            Book An Event
          </Link>
        </div>
      </div>
    </section>
  );
}
