import { useParams } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Nav from "./Components/Nav";

function App() {
  const {name} = useParams();
  return (
    <div className="flex h-screen flex-col items-center">
      <Nav />
      {name === "shop" ? (
        <Shop />
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;
