import HeroSection from "@/app/components/bakery/about/hero-section";
import Team from "@/app/components/bakery/about/team-section";
import Header from "@/app/components/bakery/header";
import Contact from "@/app/components/bakery/contact";

export default function AboutPage() {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Meet the Team Section */}
      <Team />

      {/* Contact Us Section */}
      <Contact />
    </div>
  );
}
