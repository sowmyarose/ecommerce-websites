export default function Blog() {
  return (
    <section className="w-full py-12 px-2 md:px-4 bg-white">
      <div className="rounded-[50px] bg-pink-100 flex flex-col p-8">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 text-center">
          Latest from Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-black">
              5 Tips for the Perfect Birthday Cake
            </h3>
            <p className="text-gray-600 mt-2">
              Learn how to bake a stunning and delicious birthday cake for your
              loved ones...
            </p>
            <button className="mt-4 bg-[#c693f2] text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-black">
              How to Choose the Right Cake for Your Event
            </h3>
            <p className="text-gray-600 mt-2">
              From weddings to baby showers, discover the best cake styles for
              every occasion...
            </p>
            <button className="mt-4 bg-[#c693f2] text-white px-4 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
