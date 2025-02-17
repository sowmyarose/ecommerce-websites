"use client";
import { useParams } from "next/navigation";

// Data
import { products } from "@/app/lib/clothing/constants";

// Components
import Header from "@/app/components/clothing/header";
import ProductsList from "@/app/components/clothing/shop/products-list";
import ContactSection from "@/app/components/clothing/contact-section";

export default function Type() {
  const { type } = useParams();

  const dresses = products.filter((item) => item.type === type);

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      <div className="w-full mt-6 xl:mt-20 py-8">
        <h2 className="mt-24 text-center text-black font-bold text-4xl">
          {type?.toString().toUpperCase()}
        </h2>

        <ProductsList products={dresses} />
      </div>

      <ContactSection />
    </div>
  );
}
