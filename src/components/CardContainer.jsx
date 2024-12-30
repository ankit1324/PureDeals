import { useEffect, useState } from "react";
import Card from "./Card";
import ShimmerUi from "./ShimmerUi";

const CardContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.escuelajs.co/api/v1/products"
    );
    const json = await data.json();
    // console.log(json)
    setItems(json);
  };

  return items.length == 0 ? (
    <ShimmerUi />
  ) : (
    <div className="flex flex-wrap ml-72 mt-4">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      {/* <Card item={items[0]} /> */}
    </div>
  );
};

export default CardContainer;
