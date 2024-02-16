import PropTypes from "prop-types";

export default function Card({
  id,
  image,
  price,
  name,
  cartItems,
  setCartItems,
}) {
  const addItemToCart = (id, name, price, image) => {
    setCartItems([...cartItems, { id, name, price, image }]);
  };

  if (!image.toLowerCase().startsWith("https://i.imgur.com/")) return null;

  return (
    <div className="font-ibm" data-testid="shop-item">
      <img src={image} alt="Insert image here" />
      <p className="my-1 text-xl font-bold">${price}</p>
      <p className="my-1 text-base">{name}</p>
      <button
        onClick={() => addItemToCart(id, image, price, name)}
        className="my-1 bg-black p-3 text-white hover:bg-gray-900"
      >
        Add to Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};
