import { useEffect, useState } from "react";
import Card from "../components/Card";
import ShimmerUi from "../components/ShimmerUi";

const Kids = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, [items]);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.escuelajs.co/api/v1/categories/5/products?limit=10&offset=1"
    );
    const json = await data.json();
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

export default Kids;
