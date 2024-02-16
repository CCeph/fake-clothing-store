import PropTypes from "prop-types";

export default function Card({ image, price, name }) {
  if (!image.toLowerCase().startsWith("https://i.imgur.com/")) return null;

  return (
    <div className="font-ibm" data-testid="shop-item">
      <img src={image} alt="Insert image here" />
      <p className="my-1 text-xl font-bold">${price}</p>
      <p className="my-1 text-base">{name}</p>
      <button className="my-1 bg-black p-3 text-white">Add to Cart</button>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
