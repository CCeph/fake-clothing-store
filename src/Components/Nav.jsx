import { Link } from "react-router-dom";
import logo from "../assets/urban.png";

export default function Nav({ setCartVisibile }) {
  return (
    <nav className="flex w-full items-stretch justify-between justify-items-center bg-black text-white">
      <Link to={"/"}>
        <img src={logo} className="h-24 w-24" />
      </Link>
      <ul className="flex justify-items-center">
        <Link to={"/"} className="flex items-center p-8 hover:bg-gray-800">
          Home
        </Link>
        <Link to={"/shop"} className="flex items-center p-8 hover:bg-gray-800">
          Mens
        </Link>
        <Link to={"/shop"} className="flex items-center p-8 hover:bg-gray-800">
          Women
        </Link>
      </ul>
      <button
        className="flex items-center p-7"
        onClick={() => {
          setCartVisibile(true);
        }}
      >
        Cart
      </button>
    </nav>
  );
}
