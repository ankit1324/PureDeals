import React from "react";

const Card = (props) => {
  const itemData = props;
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={itemData.item.images[0]} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{itemData.item.title}</h2>
          <p className="text-sm">{itemData.item.description}</p>
          <div className="card-actions">
            <button className="btn btn-secondary">{itemData.item.price}</button>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
