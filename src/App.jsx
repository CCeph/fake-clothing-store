import { useParams } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";

function App() {
  const {name} = useParams();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {name === "shop" ? (
        <Shop />
      ) : (
        <Homepage />
      )}
      <h1 className="text-3xl">
      Vite + React + Vitest + React Router + Proptypes + Prettier + Tailwind
    </h1>
    <h2 className="text-2xl">Enjoy!</h2>
    </div>
  );
}

export default App;
