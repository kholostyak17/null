import React from "react";

const Description = ({ data }) => {
  const listData = Object.entries(data);
  console.log(listData);
  return (
    <ul className="description">
      {listData.map((item) => (
        <li>
          {item[0]}: {item[1].toString()}
        </li>
      ))}
    </ul>
  );
};

export default Description;
