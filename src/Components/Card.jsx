import PropTypes from "prop-types";

export default function Card({ image, price, name, type }) {
  return (
    <div>
      <img src={image} alt="Insert image here" />
      <p>{price}</p>
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
