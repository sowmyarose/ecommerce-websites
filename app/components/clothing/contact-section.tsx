export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] py-12">
      <div className="w-full md:max-w-xl lg:max-w-3xl xl:max-w-7xl mx-auto flex flex-col lg:flex-row justify-around items-center lg:items-start px-4 text-white gap-4">
        <div>
          <h2 className="text-2xl lg:text-4xl text-center">
            The Loom Fashions
          </h2>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-white hover:text-blue-600">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Twitter
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2 items-center">
          <h4 className="text-lg">Location</h4>
          <p>123 Street Name</p>
          <p>City Name</p>
          <p className="mt-6">123-123-456</p>
          <p>email@email.com</p>
        </div>

        {/* Subscription */}
        <div className="flex flex-col gap-2 items-center">
          <h4 className="text-lg">Subscriptions & Newsletters</h4>
          <input
            placeholder="Email"
            className="p-4 bg-transparent border border-white mt-6"
          />
          <button className="p-3 text-center rounded-md bg-white text-black mt-8 w-full">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
