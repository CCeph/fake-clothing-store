import { useParams } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState } from "react";
import "./App.css";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [checkoutMessageActive, setCheckoutMessageActive] = useState(false);
  const { name } = useParams();

  return (
    <div className="flex h-screen flex-col items-center">
      <Nav setCartVisible={setCartVisible} cartItems={cartItems} />
      {name === "shop" ? (
        <Shop
          cartItems={cartItems}
          setCartItems={setCartItems}
          checkoutMessageActive={checkoutMessageActive}
          setCheckoutMessageActive={setCheckoutMessageActive}
        />
      ) : (
        <Homepage />
      )}
      <Cart
        cartVisible={cartVisible}
        setCartVisible={setCartVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        checkoutMessageActive={checkoutMessageActive}
        setCheckoutMessageActive={setCheckoutMessageActive}
      />
    </div>
  );
}

export default App;
