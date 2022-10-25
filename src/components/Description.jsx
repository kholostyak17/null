import React, { useState } from "react";

const Description = ({ data }) => {
  const [isTextHidden, setIsTextHidden] = useState(true);
  const listData = Object.entries(data); //transform object to array

  return (
    <div className="description">
      <h1>
        {data?.brand} {data?.model}
      </h1>
      <p>{data?.price ? `${data?.price}€` : ""}</p>
      <ul className={isTextHidden && "hidden-description"}>
        {listData?.map((item) => (
          <li key={item[0]}>
            {item[0]}: {item[1].toString()}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setIsTextHidden(!isTextHidden);
        }}
      >
        {isTextHidden ? "show more" : "see less"}
      </button>
    </div>
  );
};

export default Description;
