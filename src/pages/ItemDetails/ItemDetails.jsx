import React from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  return <div className="ItemDetails">{id}</div>;
};

export default ItemDetails;
