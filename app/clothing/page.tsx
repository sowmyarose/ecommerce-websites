import Link from "next/link";
import Header from "../components/clothing/header";
import HeroSection from "../components/clothing/hero-section";
import Image from "next/image";
import ProductsList from "../components/clothing/shop/products-list";
import { products } from "../lib/clothing/constants";
import ContactSection from "../components/clothing/contact-section";

const blogs = [
  {
    title: "How to Style Your Outfit for Every Occasion",
    description: "Discover the secrets to perfect styling for any event.",
    img: "/clothing/blog1.png",
  },
  {
    title: "Top Fashion Trends to Watch in 2025",
    description:
      "Fashion is constantly evolving, and 2025 is set to bring bold, innovative, and sustainable trends that redefine style. ",
    img: "/clothing/blog2.png",
  },
  {
    title: "How to Build an Eco-Friendly Wardrobe",
    description:
      "Building an eco-friendly wardrobe doesn’t mean sacrificing style—it’s about making smarter choices that benefit both you and the planet.",
    img: "/clothing/blog3.png",
  },
];

export default function Clothing() {
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

      {/* Hero-section */}
      <HeroSection />

      {/* About */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-6 flex flex-row">
          <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <Image
              src="/clothing/about.png"
              alt="you"
              width={400}
              height={300}
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center gap-8">
            <p className="mt-4 text-gray-600">
              Welcome to our clothing store! We are dedicated to providing
              stylish and high-quality apparel that suits your unique fashion
              sense. Our mission is to make fashion accessible and enjoyable for
              everyone, blending comfort with the latest trends.
            </p>
            <Link
              href="/clothing/about"
              className="p-3 text-center rounded-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] text-white mt-8"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive offers */}
      <section className="w-full bg-[#e3f2fd] py-12 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Exclusive Offers & Discounts
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Don&apos;t miss out on our special deals! Enjoy up to 50% off on
            selected items.
          </p>
          <ProductsList products={products.slice(5, 9)} type="all" />
          <button className="mt-6 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] text-white px-6 py-2 rounded-lg hover:bg-gray-700">
            Shop Now
          </button>
        </div>
      </section>

      {/* Blog section */}
      <section className="w-full bg-gray-100 py-12 px-6 text-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest fashion trends, styling tips, and
            industry insights. Our blog is here to inspire and keep you
            informed.
          </p>
        </div>
        <div className="container mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={blog.img}
                alt="Blog Post"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                {blog.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{blog.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
