import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { API_URL } from "../common/constants";
import { addToCart } from "../store/features/productsSlice";

const Actions = ({ storageOptions, colorOptions }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [storageCode, setStorageCode] = useState(storageOptions?.[0].code);
  const [colorCode, setColorCode] = useState(colorOptions?.[0].code);

  const buy = async (data) => {
    // const response = await fetch(`${API_URL}/cart`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // const buyResponse = await response.json();
    // try {
    //   dispatch(increment(buyResponse.count));
    // } catch {
    //   //set error here
    // }
    dispatch(addToCart({ hola: "hola" }));
  };

  return (
    <div className="actions">
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
          disabled={!(colorCode && setStorageCode)}
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default Actions;
