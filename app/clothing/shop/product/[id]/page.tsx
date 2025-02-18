"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

// Data
import { products } from "@/app/lib/clothing/constants";

// Components
import Header from "@/app/components/clothing/header";
import ProductDetail from "@/app/components/clothing/shop/product-detail";
import ContactSection from "@/app/components/clothing/contact-section";

export default function Product() {
  const { id } = useParams();
  const product = products.find(
    (item) => item.id.toString() === id?.toString()
  );

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Free shipping */}
      <div className="w-full bg-gray-100 text-center text-sm text-black p-2 mt-20 md:mt-24">
        Free Shipping & Returns
        <Link
          href="/clothing/shipping"
          className="ml-4 text-blue-500 underline"
        >
          Read More
        </Link>
      </div>

      {/* Product */}
      <section className="w-full py-8 bg-white">
        <ProductDetail product={product} />
      </section>

      <ContactSection />
    </div>
  );
}
