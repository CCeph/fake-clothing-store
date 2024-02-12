import { useParams } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cartVisibile, setCartVisibile] = useState(false);
  const { name } = useParams();

  /* useEffect(() => {
    const handler = () => {
      setCartVisibile(false);
    };

    document.addEventListener("click", handler);
  }); */

  return (
    <div className="flex h-screen flex-col items-center">
      <Nav setCartVisibile={setCartVisibile} />
      {name === "shop" ? <Shop /> : <Homepage />}
      <Cart cartVisibile={cartVisibile} />
    </div>
  );
}

export default App;
