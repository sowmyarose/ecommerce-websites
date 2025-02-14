import Image from "next/image";
import Header from "@/app/components/clothing/header";
import ContactSection from "@/app/components/clothing/contact-section";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="w-full relative min-h-[250px] lg:min-h-[400px] xl:min-h-[500px] flex mt-24">
        <Image src="/clothing/contact.jpg" alt="hero" fill objectFit="cover" />
        <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
          <h2 className="text-black text-5xl font-bold text-center z-30">
            Contact Us
          </h2>
        </div>
      </section>

      {/* Form */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-xl text-center">Get in Touch</h4>

          <form className="max-w-xl mx-auto mt-10 w-full flex flex-col gap-8 shadow-lg p-8">
            <input placeholder="Name" className="border-b border-b-black" />
            <input placeholder="Email" className="border-b border-b-black" />
            <input placeholder="Phone" className="border-b border-b-black" />
            <input placeholder="Message" className="border-b border-b-black" />
          </form>

          <div className="w-full flex justify-center">
            <button className="p-3 text-center rounded-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] text-white mt-8">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="w-full py-12 bg-gray-100">
        <div className="flex flex-row max-w-7xl mx-auto gap-8">
          <Image
            src="/clothing/store.png"
            alt="hero"
            width={600}
            height={400}
          />

          <div className="flex flex-col mt-8 text-black px-8">
            <h2 className="text-3xl">The Looms fashions</h2>
            <p className="text-lg mt-8">Visit us at</p>
            <p>123 Street Name</p>
            <p>City Name</p>
            <p className="mt-6">123-123-456</p>
            <p>email@email.com</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
