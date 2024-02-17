import PropTypes from "prop-types";

export default function Card({
  id,
  image,
  price,
  name,
  cartItems,
  setCartItems,
}) {
  function addItemToCart(id, name, price, image) {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      setCartItems([
        ...cartItems,
        { id: id, name: name, price: price, image: image, count: 1 },
      ]);
    } else {
      const shallowCartItemsCopy = [...cartItems];
      const itemCopy = { ...shallowCartItemsCopy[itemIndex] };

      itemCopy.count = itemCopy.count + 1;
      shallowCartItemsCopy[itemIndex] = itemCopy;
      setCartItems(shallowCartItemsCopy);
    }
  }

  if (!image.toLowerCase().startsWith("https://i.imgur.com/")) return null;

  return (
    <div className="font-ibm" data-testid="shop-item">
      <img src={image} alt={"Image of " + name} />
      <p className="my-1 text-xl font-bold">${price}</p>
      <p className="my-1 text-base">{name}</p>
      <button
        onClick={() => addItemToCart(id, name, price, image)}
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
