import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";

const Card = (props) => {
  const { item } = props; // Destructure props for cleaner access
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); // Dispatch the action to add an item to the cart
  };

  return (
      <div>
        <div className="card bg-base-100 w-80 shadow-xl">
          <figure className="px-10 pt-10">
            <img
                src={item?.images[0]}
                alt={item?.title}
                className="rounded-xl h-56"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">{item?.title}</h2>
            <div className="card-actions">
              <button className="btn btn-secondary">${item?.price}</button>
              <button
                  onClick={() => handleAddToCart(item)}
                  className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
