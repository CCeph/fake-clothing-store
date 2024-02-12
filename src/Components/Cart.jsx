export default function Cart({ cartVisibile }) {
  return (
    <aside
      aria-label="cart"
      data-testid="cart"
      className={
        (!cartVisibile && "custom-invisible ") +
        " fixed right-0 flex h-screen flex-col bg-black p-7 text-white"
      }
    >
      <div className="flex justify-between gap-20">
        <p>NAN items</p>
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
