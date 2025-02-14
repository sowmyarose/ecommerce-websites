import Header from "@/app/components/clothing/header";
import Shipping from "@/app/components/clothing/shipping";

export default function ShippingPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero section */}
      <section className="w-full bg-[url('/clothing/sky.jpg')] bg-no-repeat bg-cover min-h-[400px] flex items-center justify-center mt-20 md:mt-24">
        <h2 className="text-center text-3xl md:text-7xl text-black font-bold">
          Shipping & Returns
        </h2>
      </section>

      {/* Shipping */}
      <Shipping />

      {/* Add Contact section */}
    </div>
  );
}
