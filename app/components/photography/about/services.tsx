const services = [
  {
    name: "wedding",
    title: "Wedding Photography",
    description:
      "Capture your special day with professional wedding photography that tells your love story.",
    img: "bg-[url('/photography/wedding.png')]",
  },
  {
    name: "event",
    title: "Event Photography",
    description:
      "From corporate events to private parties, I offer event photography that captures every detail.",
    img: "bg-[url('/photography/event.jpg')]",
  },
  {
    name: "sales",
    title: "Photo Sales",
    description:
      "Explore a selection of my best works available for purchase as digital downloads or prints.",
    img: "bg-[url('/photography/sales.jpg')]",
  },
];

export default function Services() {
  return (
    <section className="bg-black py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-white mb-8">Our Services</h2>
      <div className="px-2 md:px-4 xl:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.name}
            className={`${service.img} bg-no-repeat bg-center rounded-lg`}
          >
            <div className="rounded-lg shadow-lg h-[300px] xl:h-[400px] flex flex-col items-center justify-end">
              <div className="backdrop-blur-sm bg-white/30 rounded-b-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-black">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
