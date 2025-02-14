import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full relative min-h-[500px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[920px] flex">
      <Image src="/clothing/hero4.png" alt="hero" fill objectFit="cover" />
      <div className="z-30 flex flex-col w-full py-56 px-4 md:px-28 gap-8">
        <h2 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold z-30">
          Curated Fashion for the Modern You.
        </h2>

        <div className="flex">
          <Link
            href="/clothing/shop"
            className="py-4 px-8 bg-white text-black font-semibold rounded-md"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
