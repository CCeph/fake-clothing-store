import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

export default function Shop({
  cartItems,
  setCartItems,
  setCheckoutMessageActive,
}) {
  const [itemsList, setItemsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [networkError, setNetworkError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=${pageNumber}&limit=9`,
      {
        mode: "cors",
      },
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setItemsList(data))
      .catch((error) => setNetworkError(error))
      .finally(() => setLoading(false));
  }, [pageNumber]);

  if (networkError) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const cardList = itemsList.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        image={item.images[0]}
        price={item.price}
        name={item.title}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setCheckoutMessageActive={setCheckoutMessageActive}
      ></Card>
    );
  });

  return (
    <div className="p-7">
      <div className="grid grid-cols-auto-fill-300 gap-5 p-7">{cardList}</div>
      <div className="flex w-full justify-center gap-7">
        <button
          className="bg-black p-3 text-white"
          onClick={() => setPageNumber(0)}
        >
          1
        </button>
        <button
          className="bg-black p-3 text-white"
          onClick={() => setPageNumber(8)}
        >
          2
        </button>
      </div>
    </div>
  );
}

Shop.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
  setCheckoutMessageActive: PropTypes.func.isRequired,
};
