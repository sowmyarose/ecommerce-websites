import Image from "next/image";
import Header from "@/app/components/clothing/header";

export default function About() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="w-full mt-20 md:24">
        <div className="bg-[url('/clothing/about-hero.png')] bg-no-repeat bg-cover flex items-center justify-center p-10 md:p-20 lg:p-28 xl:p-32">
          <h2 className="text-white text-5xl font-bold text-center z-30">
            About Us
          </h2>
        </div>
      </section>

      {/* Founder */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <Image
              src="/clothing/about1.png"
              alt="you"
              width={400}
              height={300}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Founder</h2>
            <p className="mt-4 text-gray-600">
              Founded with a vision to redefine fashion, our team is dedicated
              to curating collections that suit every occasion. Thank you for
              being part of our journey, and we look forward to serving you!
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row-reverse gap-4">
          <div className="w-full md:w-1/2 flex justify-center gap-4">
            <Image
              src="/clothing/about2.png"
              alt="you"
              width={400}
              height={300}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="mt-4 text-gray-600">
              From humble beginnings, we have worked tirelessly to source the
              best materials, collaborate with talented designers, and bring you
              collections that blend quality with creativity. We are proud of
              how far we have come and are excited for what the future holds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
