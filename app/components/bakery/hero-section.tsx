import Image from "next/image";
import { cookie } from "../../fonts/fonts";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full mt-20 py-8 md:mt-24 px-2 md:px-4 bg-white">
      <div className="rounded-[50px] bg-[#f3ddf3] flex flex-col gap-4 lg:flex-row min-h-[700px] lg:min-h-[750px] overflow-hidden">
        {/* Title & Description */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
          <h1
            className={`text-5xl text-center md:text-6xl font-bold text-[#b574ef] ${cookie.className}`}
          >
            Delicious Cakes for Every Occasion
          </h1>
          <p className="text-gray-600 mt-4 text-center">
            Freshly baked with love and premium ingredients
          </p>
          <Link
            href="/bakery/contact"
            className="mt-6 bg-[#c693f2] text-white px-6 py-2 rounded-lg"
          >
            Order Now
          </Link>
        </div>

        {/* Picture */}
        <div className="w-full lg:w-1/2 p-4 lg:p-0">
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-full">
            <Image
              src="/cake1.png"
              alt="cake"
              fill
              objectFit="cover"
              className="rounded-md lg:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
