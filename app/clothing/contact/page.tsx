import Image from "next/image";
import Header from "@/app/components/clothing/header";
import ContactSection from "@/app/components/clothing/contact-section";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="w-full mt-20 md:24">
        <div className="bg-[url('/clothing/contact.jpg')] bg-no-repeat bg-cover flex items-center justify-center p-10 md:p-20 lg:p-28 xl:p-32">
          <h2 className="text-white text-5xl font-bold text-center z-30">
            Contact Us
          </h2>
        </div>
      </section>

      {/* Form */}
      <section className="w-full py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-black">
          <h4 className="text-xl text-center">Get in Touch</h4>

          <form className="max-w-xl mx-auto mt-10 w-full flex flex-col gap-8 shadow-lg p-8 bg-white text-black">
            <input placeholder="Name" className="border-b border-b-black p-3" />
            <input
              placeholder="Email"
              className="border-b border-b-black p-3"
            />
            <input
              placeholder="Phone"
              className="border-b border-b-black p-3"
            />
            <input
              placeholder="Message"
              className="border-b border-b-black p-3"
            />
          </form>

          <div className="w-full flex justify-center">
            <button className="p-3 text-center rounded-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] text-white mt-8">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="w-full py-12 bg-white">
        <div className="flex flex-col lg:flex-row w-full px-6 sm:px-8 xl:max-w-screen-xl mx-auto gap-8">
          <div className="flex justify-center lg:w-1/2">
            <Image
              src="/clothing/store.png"
              alt="hero"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0 text-black md:px-6 sm:px-8 text-black">
            <h2 className="text-2xl lg:text-4xl font-bold">
              The Looms Fashions
            </h2>
            <p className="text-lg sm:text-xl mt-6">Visit us at</p>
            <p className="text-base sm:text-lg">123 Street Name</p>
            <p className="text-base sm:text-lg">City Name</p>
            <p className="mt-6 text-base sm:text-lg">123-123-456</p>
            <p className="text-base sm:text-lg">email@email.com</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
