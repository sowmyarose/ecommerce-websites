import { products } from "@/app/lib/clothing/constants";
import Image from "next/image";

const billingFields = [
  { name: "email", label: "Email" },
  { name: "name", label: "Name" },
  { name: "house", label: "House No" },
  { name: "street", label: "Street" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "pincode", label: "Pincode" },
];

const BackButton = ({ goBack }: any) => {
  return (
    <div
      className="flex flex-row gap-2 text-neutral-600 cursor-pointer"
      onClick={goBack}
    >
      <Image
        src="/clothing/arrow-left-long-solid.svg"
        alt="left"
        width={20}
        height={10}
      />
      Continue Shopping
    </div>
  );
};

const Summary = () => {
  const summaryItems = products.slice(3, 6);

  return (
    <>
      {summaryItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center mt-8"
        >
          <div className="flex flex-row gap-2">
            <Image
              src={item.img}
              alt="pdt"
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <span className="text-black">{item.title}</span>
              <br />
              <span className="text-zinc-500">Size: L</span>
            </div>
          </div>
          <span className="text-zinc-500">{item.price}</span>
        </div>
      ))}
    </>
  );
};

const OrderComplete = ({ billingState }: any) => {
  return (
    <div className="w-full flex items-center justify-center mt-6">
      <div className="flex flex-col w-[500px] bg-white shadow-md rounded-md">
        <h3 className="border-b border-b-gray-200 p-6 text-lg md:text-xl text-black font-semibold">
          Thank you for ordering!
        </h3>

        <div className="border-b border-b-gray-200 p-6">
          <h4 className="font-semibold text-black">Order Summary</h4>
          <Summary />
        </div>

        {/* Billing */}
        <div className="border-b border-b-gray-200 p-6 text-black">
          <h4 className="font-semibold">Billing</h4>

          <div className="flex flex-col md:flex-row justify-between mt-4">
            {/* Name */}
            <div className="text-zinc-600">
              <p>{billingState.name}</p>
              <p>{billingState.email}</p>
            </div>

            {/* Address */}
            <div className="text-zinc-600">
              <p>
                {billingState.house} - {billingState.street}
              </p>
              <p>{billingState.city}</p>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="border-b border-b-gray-200 p-6 text-black">
          <h4 className="font-semibold">Payment</h4>

          <div className="bg-sky-100 p-3 mt-4 text-center text-zinc-400">
            Payment Details
          </div>
        </div>

        {/* Total */}
        <div className="mt-6 p-6">
          <div className="flex justify-between text-lg font-semibold text-black">
            <span>Total:</span>
            <span>Rs. 2000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BilledDetail = ({ billingState }: any) => {
  return (
    <div className="shadow-md rounded-md bg-white py-4 text-black">
      <div className="text-lg border-b border-b-gray-200 p-2 flex flex-row items-center gap-4 p-4">
        <Image
          src="/clothing/circle-check-green.svg"
          alt="greenchk"
          width={40}
          height={40}
        />
        Billing Address
      </div>

      <div className="flex flex-col lg:flex-row justify-between p-6">
        {/* Name */}
        <div className="text-lg flex flex-row items-center gap-4">
          <Image
            src="/clothing/user-blue.svg"
            alt="user"
            width={20}
            height={20}
          />
          <div className="text-zinc-600 text-sm">
            <p>{billingState.name}</p>
            <p>{billingState.email}</p>
          </div>
        </div>

        {/* Address */}
        <div className="text-zinc-600 text-sm ml-10 mt-4 ">
          <p>
            {billingState.house} - {billingState.street}
          </p>
          <p>{billingState.city}</p>
        </div>
      </div>
    </div>
  );
};

const BillingForm = ({
  billingState,
  handleChange,
  enablePayment,
  loading,
  handleSubmit,
}: any) => {
  return (
    <div className="flex flex-col shadow-md rounded-md bg-white p-10 text-black">
      <h4>Billing Address</h4>

      {billingFields.map((field, index) => (
        <input
          name={field.name}
          key={index}
          placeholder={field.label}
          value={billingState[field.name]}
          className="p-3 bg-transparent border border-gray-300 mt-6"
          onChange={handleChange}
        />
      ))}

      {enablePayment === "error" && (
        <p className="mt-4 text-center text-red-600">
          Please fill all the fields
        </p>
      )}

      <button
        className={`mt-4 text-white ${
          loading.billing
            ? "bg-gray-500"
            : " bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E]"
        } p-3`}
        onClick={handleSubmit}
      >
        {loading.billing ? "Loading..." : "Continue to Payment"}
      </button>
    </div>
  );
};

const PaymentSection = ({ enablePayment, loading, handlePayment }: any) => {
  return (
    <>
      {enablePayment ? (
        <div className="flex flex-col shadow-md rounded-md bg-white p-10 text-black">
          <h4>Payment</h4>
          <button
            className={`mt-4 text-white ${
              loading.payment
                ? "bg-gray-500"
                : " bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E]"
            } p-3`}
            onClick={handlePayment}
          >
            {loading.payment ? "Loading..." : "Proceed to Pay"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col shadow-md rounded-md bg-gray-200 text-zinc-700 p-6">
          <h4>Payment</h4>
        </div>
      )}
    </>
  );
};

export {
  BackButton,
  OrderComplete,
  Summary,
  BilledDetail,
  BillingForm,
  PaymentSection,
};
