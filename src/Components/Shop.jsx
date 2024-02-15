import { useEffect, useState } from "react";
import Card from "./Card";

export default function Shop() {
  const [itemsList, setItemsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [networkError, setNetworkError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=${pageNumber}&limit=12`,
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

  console.log(itemsList);
  const cardList = itemsList.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.images[0]}
        price={item.price}
        name={item.title}
      ></Card>
    );
  });

  return (
    <div className="grid-cols-auto-fill-300 grid gap-5 p-5">{cardList}</div>
  );
}
