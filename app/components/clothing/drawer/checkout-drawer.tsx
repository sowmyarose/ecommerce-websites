"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/app/lib/clothing/constants";
import {
  BackButton,
  BilledDetail,
  BillingForm,
  OrderComplete,
  PaymentSection,
  Summary,
} from "./common";

const initialState = {
  email: "",
  name: "",
  house: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
};

export default function CheckoutDrawer({
  openCheckout,
  setOpenCheckout,
  setOpenCart,
}: any) {
  const [billingState, setBillingState] = useState<any>(initialState);
  const [enablePayment, setEnablePayment] = useState("");
  const [loading, setLoading] = useState({ billing: false, payment: false });

  const goBack = () => {
    setOpenCart(false);
    setOpenCheckout(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnablePayment("");
    setBillingState({ ...billingState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading({ ...loading, billing: true });
    setTimeout(() => {
      const valid = Object.values(billingState).every((item) => item !== "");
      setEnablePayment(valid ? "openPayment" : "error");
      setLoading({ ...loading, billing: false });
    }, 5000);
  };

  const handlePayment = () => {
    setLoading({ ...loading, payment: true });
    setTimeout(() => {
      setEnablePayment("complete");
      setLoading({ ...loading, payment: false });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: openCheckout ? "0%" : "100%" }}
      exit={{ x: openCheckout ? "100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 flex flex-col"
    >
      <div className="bg-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      </div>

      <div className="flex flex-col py-12 px-6 lg:px-16 xl:px-24 grow overflow-y-auto gap-4">
        {/* Back */}
        <BackButton goBack={goBack} />

        {enablePayment === "complete" ? (
          <OrderComplete billingState={billingState} />
        ) : (
          <div className="flex flex-col md:flex-row-reverse gap-8">
            {/* Summary */}
            <div className="w-full md:w-1/2 min-h-[500px] flex flex-col shadow-md rounded-md bg-white p-7 md:p-10">
              <h4 className="text-lg font-semibold">Order Summary</h4>

              <Summary />

              <div className="border-t border-gray-200 p-6 bg-white mt-auto">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>Rs. 2000</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-8">
              {/* Billing form */}
              {enablePayment ? (
                <BilledDetail billingState={billingState} />
              ) : (
                <BillingForm
                  {...{
                    billingState,
                    handleChange,
                    enablePayment,
                    loading,
                    handleSubmit,
                  }}
                />
              )}

              {/* Payment Form */}
              <PaymentSection {...{ enablePayment, loading, handlePayment }} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
