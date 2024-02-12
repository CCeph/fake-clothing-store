import { Link } from "react-router-dom";
import logo from "../assets/urban.png";

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between justify-items-center bg-black text-white">
      <img src={logo} className="h-24 w-24" />
      <ul className="flex justify-items-center">
        <Link to={"/"} className="p-9 hover:bg-gray-800">
          Home
        </Link>
        <Link to={"/shop"} className="p-9 hover:bg-gray-800">
          Mens
        </Link>
        <Link to={"/shop"} className="p-9 hover:bg-gray-800">
          Women
        </Link>
      </ul>
      <h1 className="p-7">Cart</h1>
    </nav>
  );
}
