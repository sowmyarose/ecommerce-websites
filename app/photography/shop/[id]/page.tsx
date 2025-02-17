"use client";
import Header from "@/app/components/photography/header";
import { lusitana } from "@/app/fonts/fonts";
import { photos } from "@/app/lib/photography/constants";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function PhotoDetail() {
  const { id } = useParams();
  const photo = photos.find((item) => item.id.toString() === id?.toString());

  return (
    <div className={`w-full h-screen flex flex-col ${lusitana.className}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-black min-h-[300px]">
        <div className="flex items-center justify-center text-white text-center w-full h-full">
          <h1 className="text-4xl md:text-6xl font-semibold">{photo?.title}</h1>
        </div>
      </section>

      {/* Photo Details */}
      {photo && (
        <div className="py-12 w-full flex flex-col lg:flex-row px-4 md:px-12 gap-8 bg-white text-black">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[300px] md:h-[500px] relative flex">
            <Image
              src={photo?.imageUrl}
              alt={photo?.title}
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {photo?.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{photo?.price}</p>
            <p className="text-lg text-gray-600 mb-8">
              This beautiful photo is available for purchase either as a digital
              download or a print. Choose the option that best fits your needs!
            </p>

            {/* Options for Purchase */}
            <div className="space-x-4 flex flex-row">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg md:text-lg font-semibold hover:bg-blue-800 transition">
                Digital Download
              </button>
              <button className="w-full py-3 bg-green-600 text-white rounded-lg md:text-lg font-semibold hover:bg-green-800 transition">
                Print (Framed)
              </button>
            </div>

            {/* Payment Instructions */}
            <div className="mt-8 text-lg text-gray-600">
              <p>
                If you have selected a purchase option, you will be redirected
                to a secure payment page to complete the transaction.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
