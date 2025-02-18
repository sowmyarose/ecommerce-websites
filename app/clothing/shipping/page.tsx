import Header from "@/app/components/clothing/header";
import Shipping from "@/app/components/clothing/shipping";

export default function ShippingPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero section */}
      <section className="w-full mt-20 md:24">
        <div className="bg-[url('/clothing/sky.jpg')] bg-no-repeat bg-cover flex items-center justify-center p-10 md:p-20 lg:p-28 xl:p-32">
          <h2 className="text-white text-5xl font-bold text-center z-30">
            Shipping & Returns
          </h2>
        </div>
      </section>

      {/* Shipping */}
      <Shipping />

      {/* Add Contact section */}
    </div>
  );
}
