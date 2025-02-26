import Image from "next/image";

export default function About() {
  return (
    <section className="w-full px-4 bg-white">
      <div className="flex flex-col-reverse lg:flex-row p-4 md:p-8 md:min-h-[650px]">
        {/* Design */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center">
          <div className="absolute top-[30%] left-[-50px] bg-[#e6d1fa] w-full h-[280px] md:h-[350px] lg:h-[400px] rounded-r-full"></div>
          <Image
            src="/baker.png"
            alt="baker"
            width={400}
            height={100}
            className="rounded-lg z-30"
          />
        </div>

        {/* About */}
        <div className="w-full lg:w-1/2 flex flex-col py-10 items-center justify-center text-center lg:text-left">
          <h2 className="text-3xl font-bold text-[#b574ef] text-2xl md:text-3xl">
            About Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Welcome to our delightful cake shop! We specialize in crafting
            delicious, handcrafted cakes with the finest ingredients. Our
            passion is to create sweet moments for every celebration.
          </p>
        </div>
      </div>
    </section>
  );
}
