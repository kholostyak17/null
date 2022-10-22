import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div className="details-page">este es el item: {id}</div>;
};

export default ProductDetails;
