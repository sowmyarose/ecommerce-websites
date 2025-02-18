"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Data
import { products } from "@/app/lib/clothing/constants";

// Components
import ProductReviews from "./product-reviews";
import ProductsList from "./products-list";
import Drawer from "../drawer";
import CheckoutDrawer from "../drawer/checkout-drawer";
import CartDrawer from "../drawer/cart-drawer";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="w-full min-w-3xl mt-8">
      <label htmlFor="size" className="block text-sm font-medium text-gray-700">
        Select Size
      </label>
      <select
        id="size"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm text-black"
      >
        <option value="" disabled>
          Choose a size
        </option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function ProductDetail({ product }: any) {
  const [openCart, setOpenCart] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  return (
    <div className="w-full xl:max-w-screen-lg mx-auto px-4 flex flex-col">
      <div className="w-full flex flex-col md:flex-row gap-8 xl:gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={product?.img || ""}
            alt="item"
            width={600}
            height={600}
            className="rounded-md"
          />
        </div>

        {/* Detail */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Breadcrumb */}
          <nav className="text-gray-600 text-sm my-4">
            <ul className="flex items-center space-x-3">
              <li>
                <Link
                  href="/clothing/shop"
                  className="text-black hover:text-blue-400"
                >
                  Shop /
                </Link>
              </li>
              <li>
                <Link
                  href={`/clothing/shop/${product.type}`}
                  className="text-black hover:text-blue-400"
                >
                  {product?.type.charAt(0).toUpperCase() +
                    product?.type.slice(1)}{" "}
                  /
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-blue-400">
                  {product.title}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Title */}
          <h2 className="mt-6 text-3xl text-black">{product.title}</h2>
          {/* Price */}
          <p className="mt-4 text-black">{product.price}</p>
          {/* Size */}
          <SizeSelector />
          {/* Button */}
          <button
            className="p-3 rounded-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] text-white mt-8"
            onClick={() => setOpenCart(true)}
          >
            Add To Cart
          </button>

          {/* Product description */}
          <p className="mt-4 text-zinc-500">
            Describe about the product here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec vel sapien eu lorem fermentum
            tincidunt.
          </p>
        </div>
      </div>

      {/* Product Review */}
      <ProductReviews />

      {/* Other products */}
      <div className="mt-16">
        <h2 className="text-black text-4xl text-center">You may also like</h2>

        <ProductsList products={products.slice(0, 4)} type="all" />
      </div>

      {/* Drawer */}
      {openCart && (
        <Drawer
          {...{ openCart, setOpenCart, openCheckout, setOpenCheckout, product }}
        />
      )}
    </div>
  );
}
