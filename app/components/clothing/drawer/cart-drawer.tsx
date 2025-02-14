"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center space-x-4 mt-2">
      {/* Decrement Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleDecrement}
        className="p-2 bg-gray-200 hover:bg-blue-600 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
      >
        -
      </motion.button>

      {/* Quantity Display */}
      <motion.span
        className="text-2xl font-semibold w-10 text-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      >
        {quantity}
      </motion.span>

      {/* Increment Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleIncrement}
        className="p-2 bg-gray-200 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
      >
        +
      </motion.button>
    </div>
  );
};

export default function CartDrawer({
  openCart,
  setOpenCart,
  product,
  setOpenCheckout,
}: any) {
  const [closing, setClosing] = useState(false);

  const handleCheckout = () => {
    setOpenCheckout(true);
  };

  return (
    <AnimatePresence>
      {(openCart || closing) && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: openCart ? "0%" : "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-[300px] md:w-[400px] lg:w-[600px] h-full bg-white shadow-lg z-50 flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenCart(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            x
          </button>

          {/* Drawer Content */}
          <div className="bg-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          </div>

          {/* Scrollable Items Section */}
          <div className="flex flex-col p-6 grow overflow-y-auto">
            {/* Cart Item */}
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row gap-2">
                <Image
                  src={product.img}
                  alt="pdt"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <span className="text-lg text-black">{product.title}</span>
                  <br />
                  <span className="text-zinc-500">{product.price}</span>
                </div>
              </div>
              <button className="hover:rounded-full w-12 h-12 hover:bg-gray-100 hover:shadow-lg flex items-center justify-center">
                <Image
                  src="/clothing/trash-solid.svg"
                  alt="pdt"
                  width={20}
                  height={20}
                  className="rounded-md"
                />
              </button>
            </div>

            {/* Size Selector */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <div className="mt-1 p-2 border border-gray-200 rounded-md shadow-sm text-black bg-gray-100">
                Xl
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <QuantitySelector />
            </div>
          </div>

          {/* Fixed Bottom Total Section */}
          <div className="border-t border-gray-200 p-6 bg-white mt-auto">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>{product.price}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243E] font-bold text-white py-2 rounded-md hover:bg-blue-600"
            >
              Checkout
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
