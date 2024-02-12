import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between justify-items-center bg-black text-white">
      <h1 className="p-7">Logo</h1>
      <ul className="flex justify-items-center">
        <Link to={"/"} className="p-7 hover:bg-gray-800">
          Home
        </Link>
        <Link to={"/shop"} className="p-7 hover:bg-gray-800">
          Mens
        </Link>
        <Link to={"/shop"} className="p-7 hover:bg-gray-800">
          Women
        </Link>
      </ul>
      <h1 className="p-7">Cart</h1>
    </nav>
  );
}
