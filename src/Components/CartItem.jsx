import PropTypes from "prop-types";

export default function CartItem({
  image,
  name,
  price,
  count,
  id,
  cartItems,
  setCartItems,
}) {
  function removeItemFromCart() {
    const shallowCartItemsCopy = [...cartItems];
    const itemIndex = shallowCartItemsCopy.findIndex((item) => item.id === id);
    shallowCartItemsCopy.splice(itemIndex, 1);
    setCartItems(shallowCartItemsCopy);
  }

  return (
    <div className="flex justify-around gap-3 p-3 font-ibm">
      <img src={image} alt={"Image of " + name} className="h-24 w-24" />
      <div className="flex w-40 flex-col justify-center">
        <div className="flex justify-between">
          <p className="my-1 text-xl font-bold">${price * count}</p>
          <p className="my-1 text-base">x{count}</p>
        </div>
        <p className="my-1 text-base">{name}</p>
      </div>
      <button
        className="h-8 w-8 self-center rounded-xl bg-red-700 text-gray-900 hover:bg-red-800"
        onClick={removeItemFromCart}
      >
        X
      </button>
    </div>
  );
}

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
