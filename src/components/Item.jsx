import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { id, imgUrl, brand, model, price } = data;

  return (
    <Link to={`/${id}`}>
      <div className="item">
        <img src={imgUrl} />
        <h3>{brand}</h3>
        <p>{model}</p>
        <p>{price ? `${price}€` : "UNKNOWN"}</p>
      </div>
    </Link>
  );
};

export default Item;
