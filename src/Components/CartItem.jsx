import PropTypes from "prop-types";

export default function CartItem({ image, name, price }) {
  return (
    <div className="flex font-ibm">
      <img src={image} alt={"Image of " + name} className="h-24 w-24" />
      <div className="flex flex-col">
        <p className="my-1 text-xl font-bold">${price}</p>
        <p className="my-1 text-base">{name}</p>
      </div>
      <button>X</button>
    </div>
  );
}

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
