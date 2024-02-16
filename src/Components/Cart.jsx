import PropTypes from "prop-types";

export default function Cart({ cartVisible, setCartVisible }) {
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
        <button className="text-lg font-bold">Clear</button>
      </div>
      <hr />
      <div className="insert-items-here flex-1"></div>
      <hr />
      <div className="flex justify-between gap-20">
        <p>Total: $NAN</p>
        <button className="text-lg font-bold">Checkout</button>
      </div>
    </aside>
  );
}

Cart.propTypes = {
  cartVisible: PropTypes.bool.isRequired,
  setCartVisible: PropTypes.func.isRequired,
};
