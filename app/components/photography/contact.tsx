import { lusitana } from "@/app/fonts/fonts";
import Image from "next/image";

const socialMedia = [
  { name: "facebook", img: "/photography/facebook.svg" },
  { name: "instagram", img: "/photography/instagram.svg" },
  { name: "pinterest", img: "/photography/pinterest.svg" },
];

export default function Contact() {
  return (
    <section className={`py-16 bg-gray-50 ${lusitana.className}`}>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
            <div className="flex flex-col space-y-3">
              <p className="text-lg text-gray-600">
                <strong>Email:</strong> contact@yourwebsite.com
              </p>
              <p className="text-lg text-gray-600">
                <strong>Phone:</strong> +1 234 567 890
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((media, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <Image
                      src={media.img}
                      alt={media.name}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Address */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Location
            </h3>
            <p className="text-lg text-gray-600">
              1234 Your Street, City, Country
            </p>
            <p className="text-lg text-gray-600">Zip Code: 123456</p>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* Embed Google Maps iframe here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=...YourMapLink..."
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
