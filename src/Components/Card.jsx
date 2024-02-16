import PropTypes from "prop-types";

export default function Card({ image, price, name }) {
  return (
    <div data-testid="shop-item">
      <img src={image} alt="Insert image here" />
      <p>${price}</p>
      <p>{name}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
