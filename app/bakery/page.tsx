// Components
import Header from "../components/bakery/header";
import HeroSection from "../components/bakery/hero-section";
import BestSellers from "../components/bakery/best-sellers";
import About from "../components/bakery/about/about";
import Blog from "../components/bakery/blog";
import Testimonials from "../components/bakery/testimonials";
import Contact from "../components/bakery/contact";

export default function Bakery() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Cakes */}
      <BestSellers />

      {/* About Us */}
      <About />

      {/* Blog Section  */}
      <Blog />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Us Section */}
      <Contact />
    </div>
  );
}
