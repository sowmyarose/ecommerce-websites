import Image from "next/image";
import { cookie } from "../../fonts/fonts";

const bestSellers = [
  { name: "Chocolate Delight", price: "$25.00", image: "/choccake.png" },
  { name: "Vanilla Dream", price: "$20.00", image: "/vanicake.png" },
  { name: "Strawberry Bliss", price: "$22.00", image: "/strawcake.png" },
];

export default function BestSellers() {
  return (
    <section className="w-full xl:py-4 px-2 md:px-4 bg-white">
      <div className="rounded-[50px] bg-[#5F2966] flex flex-col">
        <h2
          className={`text-5xl font-semibold text-gray-700 text-center text-white p-6 ${cookie.className}`}
        >
          Our Bestsellers
        </h2>

        <div className="w-full grow grid grid-cols-1 md:grid-cols-3 py-6 px-4 gap-6">
          {bestSellers.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center py-4"
            >
              <Image
                src={item.image}
                width={400}
                height={200}
                alt="Cake 1"
                className="rounded"
              />
              <h3 className="text-lg font-semibold mt-4 text-white">
                {item.name}
              </h3>
              <p className="text-pink-600 mt-2 text-white">{item.price}</p>
              <button className="mt-4 bg-[#c693f2] text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
