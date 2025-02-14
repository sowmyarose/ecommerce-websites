import CheckoutDrawer from "./checkout-drawer";
import CartDrawer from "./cart-drawer";

export default function Drawer({
  openCart,
  setOpenCart,
  openCheckout,
  setOpenCheckout,
  product,
}: any) {
  return (
    <>
      {(openCart || openCheckout) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setOpenCart(false)}
        />
      )}
      {openCheckout ? (
        <CheckoutDrawer {...{ openCheckout, setOpenCheckout, setOpenCart }} />
      ) : (
        <CartDrawer {...{ openCart, setOpenCart, product, setOpenCheckout }} />
      )}
    </>
  );
}
