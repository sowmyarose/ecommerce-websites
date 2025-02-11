"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily R.",
    review:
      "Absolutely the best cakes! Fresh, delicious, and beautifully decorated.",
    image: "/person1.jpg",
  },
  {
    name: "Jona D.",
    review:
      "My go-to cake shop for every occasion. Amazing flavors and great service!",
    image: "/person2.jpg",
  },
  {
    name: "Sophia L.",
    review:
      "Loved the custom cake they made for my birthday. Highly recommended!",
    image: "/person3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full mt-4 px-4">
      <div className="rounded-[50px] bg-white flex flex-col p-8">
        <h2 className="text-3xl font-bold text-[#b574ef] text-center">
          What Our Customers Say
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#f3ddf3] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-24 h-24 relative flex overflow-hidden">
                <Image
                  src={testimonial.image}
                  fill
                  objectFit="cover"
                  alt={testimonial.name}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2">"{testimonial.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
