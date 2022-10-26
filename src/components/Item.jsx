import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Item = ({ data = {}, gridEnabled = true }) => {
  const { id, imgUrl, brand, model, price } = data;

  const productInfo = (
    <>
      <div>
        <h3 className="item-grid-brand">{brand}</h3>
        <p className="item-grid-model">{model}</p>
      </div>
      {price ? (
        <p className="price item-grid-price">{price}€</p>
      ) : (
        <p className="price item-grid-no-stock">Out of stock</p>
      )}
    </>
  );

  return (
    <Link to={`/${id}`} className="no-style" data-testid="item">
      {gridEnabled ? (
        <div className="item-grid">
          <div className="image-box-item-grid">
            <img className="image-item-grid" src={imgUrl} />
          </div>
          {productInfo}
        </div>
      ) : (
        <div className="item-list">
          <div className="item-list-box-picture">
            <img className="image-item-list" src={imgUrl} />
          </div>
          <div className="item-list-box-description">{productInfo}</div>
        </div>
      )}
    </Link>
  );
};

export default Item;
