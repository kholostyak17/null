import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actions from "../components/Actions";
import Description from "../components/Description";
import Image from "../components/Image";

const API_URL = "https://front-test-api.herokuapp.com/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const isProductData = Object.keys(productData).length !== 0;

  const getProductData = async () => {
    const response = await fetch(`${API_URL}/product/${id}`);
    const productData = await response.json();
    try {
      console.log(response, productData, "TRujyrfdY");
      setProductData(productData);
    } catch {
      console.log(response, productData, "CATCHH");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="container">
      {isProductData ? (
        <>
          <div className="details-layout">
            <div className="details-picture">
              <Image imageUrl={productData?.imgUrl} />
            </div>
            <div className="details-data">
              <Description data={productData} />
              <Actions
                storageOptions={productData?.options?.storages}
                colorOptions={productData?.options?.colors}
              />
            </div>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;
