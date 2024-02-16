import { useParams } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const { name } = useParams();

  return (
    <div className="flex h-screen flex-col items-center">
      <Nav setCartVisible={setCartVisible} />
      {name === "shop" ? <Shop /> : <Homepage />}
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
    </div>
  );
}

export default App;
