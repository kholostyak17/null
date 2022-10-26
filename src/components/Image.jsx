import React from "react";
import PropTypes from "prop-types";

const Image = ({ imageUrl, altText }) => {
  return (
    <img
      className="image-picture"
      data-testid="image"
      src={imageUrl || "mobile_placeholder.jpg"}
      alt={altText}
    />
  );
};

export default Image;

Image.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};
