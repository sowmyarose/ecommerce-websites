import Image from "next/image";
import { cookie } from "../../fonts/fonts";

export default function HeroSection() {
  return (
    <section className="w-full px-2 md:px-4 mt-28">
      <div className="rounded-[50px] bg-[#f3ddf3] flex flex-col-reverse lg:flex-row min-h-[550px] lg:min-h-[750px]">
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
          <button className="mt-6 bg-[#c693f2] text-white px-6 py-2 rounded-lg">
            Order Now
          </button>
        </div>

        {/* Picture */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-full">
            <Image
              src="/cake1.png"
              alt="cake"
              fill
              objectFit="cover"
              className="rounded-t-[50px] lg:rounded-r-[50px] lg:rounded-l-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
