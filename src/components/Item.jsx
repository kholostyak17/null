import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Item = ({ data, gridEnabled = true }) => {
  const { id, imgUrl, brand, model, price } = data;

  return (
    <Link to={`/${id}`}>
      {gridEnabled ? (
        <div className="item-grid">
          <img src={imgUrl} />
          <h3>{brand}</h3>
          <p>{model}</p>
          <p>{price ? `${price}€` : "UNKNOWN"}</p>
        </div>
      ) : (
        <div className="item-list">
          <div>
            <img src={imgUrl} />
          </div>
          <div>
            <h3>{brand}</h3>
            <p>{model}</p>
            <p>{price ? `${price}€` : "UNKNOWN"}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Item;
