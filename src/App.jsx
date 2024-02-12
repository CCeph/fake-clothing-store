import { useParams } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";

function App() {
  const { name } = useParams();
  return (
    <div className="flex h-screen flex-col items-center">
      <Nav />
      {name === "shop" ? <Shop /> : <Homepage />}
      <Cart />
    </div>
  );
}

export default App;
