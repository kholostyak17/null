import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { buyProduct } from "../common/services";
import { incrementCart } from "../store/features/productsSlice";

const Actions = ({ storageOptions = [], colorOptions = [], price }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [storageCode, setStorageCode] = useState(storageOptions?.[0]?.code);
  const [colorCode, setColorCode] = useState(colorOptions?.[0]?.code);
  const isOutOfStock = !colorOptions.length || !storageOptions.length || !price;

  const buy = async (data) => {
    const response = await buyProduct(data);
    dispatch(incrementCart(response.count));
    alert("Congratulations, you have added a new item to your cart.");
  };

  return (
    <div className="actions" data-testid="actions">
      <div>
        <h3>Options</h3>
        {Boolean(storageOptions?.length) && (
          <select
            name="storage"
            onChange={(event) => setStorageCode(event.target.value)}
          >
            {storageOptions?.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        )}
        {Boolean(colorOptions?.length) && (
          <select
            name="color"
            onChange={(event) => setColorCode(event.target.value)}
            disabled={!colorOptions.length}
          >
            {colorOptions?.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="buy-section">
        <button
          onClick={() => buy({ id, colorCode, storageCode })}
          disabled={isOutOfStock}
        >
          {!isOutOfStock ? "BUY" : "OUT OF STOCK"}
        </button>
      </div>
    </div>
  );
};

export default Actions;
