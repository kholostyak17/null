import React from "react";

const Actions = ({ storageOptions, colorOptions }) => {
  return (
    <div className="actions">
      <div>
        <h3>Options</h3>
        <select name="storage">
          {storageOptions.map((item) => (
            <option value={item.code}>{item.name}</option>
          ))}
        </select>
        <select name="color">
          {colorOptions.map((item) => (
            <option value={item.code}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="buy-section">
        <button>BUY</button>
      </div>
    </div>
  );
};

export default Actions;
