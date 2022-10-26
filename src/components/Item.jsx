import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Item = ({ data = {}, gridEnabled = true }) => {
  const { id, imgUrl, brand, model, price } = data;

  const productInfo = (
    <>
      <h3>{brand}</h3>
      <p>{model}</p>
      <p>{price ? `${price}€` : "UNKNOWN"}</p>
    </>
  );

  return (
    <Link to={`/${id}`} data-testid="item">
      {gridEnabled ? (
        <div className="item-grid">
          <img src={imgUrl} />
          {productInfo}
        </div>
      ) : (
        <div className="item-list">
          <div>
            <img src={imgUrl} />
          </div>
          <div>{productInfo}</div>
        </div>
      )}
    </Link>
  );
};

export default Item;
