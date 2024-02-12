export default function Cart() {
  return (
    <div className="fixed right-0 flex h-screen flex-col bg-black p-7 text-white">
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
    </div>
  );
}
