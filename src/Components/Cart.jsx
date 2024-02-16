export default function Cart({ cartVisible, setCartVisible }) {
  return (
    <aside
      aria-label="cart"
      data-testid="cart"
      className={
        (!cartVisible && "custom-invisible ") +
        " font-ibm fixed right-0 flex h-screen flex-col bg-black p-7 text-white"
      }
    >
      <div className="flex justify-between gap-20">
        <button
          onClick={() => {
            setCartVisible(false);
          }}
        >
          Close
        </button>
        <button>Clear</button>
      </div>
      <hr />
      <div className="insert-items-here flex-1"></div>
      <hr />
      <div className="flex justify-between gap-20">
        <p>Total: $NAN</p>
        <button>Checkout</button>
      </div>
    </aside>
  );
}
