import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { useState } from "react";

export default function Cart({
  cartVisible,
  setCartVisible,
  cartItems,
  setCartItems,
  checkoutMessageActive,
  setCheckoutMessageActive,
}) {
  function clearItems() {
    setCartItems([]);
    setCheckoutMessageActive(false);
  }

  function handleCheckoutMessage() {
    if (cartItems.length > 0) {
      clearItems();
      setCheckoutMessageActive(true);
    }
  }

  const itemsList = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        count={item.count}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></CartItem>
    );
  });

  const totalPrice = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.count,
    0,
  );

  return (
    <aside
      aria-label="cart"
      data-testid="cart"
      className={
        (!cartVisible && "custom-invisible ") +
        " fixed right-0 flex h-screen flex-col bg-black p-7 font-ibm text-white"
      }
    >
      <div className="flex justify-between gap-20">
        <button
          className="text-lg font-bold"
          onClick={() => {
            setCartVisible(false);
          }}
        >
          Close
        </button>
        <button className="text-lg font-bold" onClick={clearItems}>
          Clear
        </button>
      </div>
      <hr />
      <div className="flex-1 overflow-auto">
        {checkoutMessageActive && (
          <p className="m-3 rounded-md bg-green-500 p-2 text-black">
            Thank you for your purchase!
          </p>
        )}
        {itemsList}
      </div>
      <hr />
      <div className="flex justify-between gap-20">
        <p>Total: ${totalPrice}</p>
        <button className="text-lg font-bold" onClick={handleCheckoutMessage}>
          Checkout
        </button>
      </div>
    </aside>
  );
}

Cart.propTypes = {
  cartVisible: PropTypes.bool.isRequired,
  setCartVisible: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
  checkoutMessageActive: PropTypes.bool.isRequired,
  setCheckoutMessageActive: PropTypes.func.isRequired,
};
