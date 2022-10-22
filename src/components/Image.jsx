import React from "react";

const Image = ({ imageUrl, altText }) => {
  return <img className="image-picture" src={imageUrl} alt={altText} />;
};

export default Image;
