import React, { useEffect, useState } from "react";

const Description = ({ data = {} }) => {
  const [features, setFeatures] = useState({});
  const [isTextHidden, setIsTextHidden] = useState(true);
  const listData = Object.entries(features); //transform object to array

  const removeRepeatedData = () => {
    let newDataObject = JSON.parse(JSON.stringify(data));
    delete newDataObject.id;
    delete newDataObject.brand;
    delete newDataObject.model;
    delete newDataObject.price;
    delete newDataObject.imgUrl;
    delete newDataObject.options;
    return newDataObject;
  };

  useEffect(() => {
    if (data.id) {
      setFeatures(removeRepeatedData(data));
    }
  }, [data]);

  return (
    <div className="description" data-testid="description">
      <h1>
        {data?.brand} {data?.model}
      </h1>
      <p className="price">{data?.price ? `${data?.price}€` : ""}</p>
      <div className={`description ${isTextHidden && "hidden-description"}`}>
        {listData?.map((item) => {
          const lowercaseKey = item[0].replace(/([A-Z])/g, " $1");
          const keyLabel =
            lowercaseKey.charAt(0).toUpperCase() + lowercaseKey.slice(1);
          return (
            Boolean(item[1].toString()) && (
              <span className="description-element" key={item[0]}>
                - {keyLabel}: {item[1].toString()}
              </span>
            )
          );
        })}
      </div>
      <p
        className="expand-description-button"
        onClick={() => {
          setIsTextHidden(!isTextHidden);
        }}
      >
        {isTextHidden ? "Show more" : "See less"}
      </p>
    </div>
  );
};

export default Description;
