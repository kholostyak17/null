import React from "react";

const Actions = ({ storageOptions, colorOptions }) => {
  return (
    <div className="actions">
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
  );
};

export default Actions;
