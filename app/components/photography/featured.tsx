import { lusitana } from "@/app/fonts/fonts";
import Image from "next/image";

const collections = [
  { title: "Nature", img: "/photography/nature.jpg" },
  { title: "Country Side", img: "/photography/rural.jpg" },
  { title: "Wildlife", img: "/photography/wildlife.jpg" },
];

export default function FeaturedCollections() {
  return (
    <section className={`w-full py-12 px-2 md:px-10 ${lusitana.className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Featured Collections
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {collections.map((photo, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center"
          >
            <span className="relative flex w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src={photo.img}
                alt={photo.title}
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </span>
            <h3 className="mt-4 text-xl font-semibold">{photo.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
