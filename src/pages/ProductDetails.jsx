import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actions from "../components/Actions";
import Description from "../components/Description";
import Image from "../components/Image";
import { getProductById } from "../common/services";
import { useDispatch } from "react-redux";
import { setCurrentItem } from "../store/features/productsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({});
  const [isError, setIsError] = useState(false);

  const getProductData = async () => {
    const productResponse = await getProductById(id);
    try {
      setProductData(productResponse);
      dispatch(
        setCurrentItem(`${productResponse.brand} ${productResponse.model}`)
      );
    } catch {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="container details-page" data-testid="details-page">
      {productData?.id ? (
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
                price={productData.price}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="empty-list-message">
          {isError ? "loading error!" : "loading..."}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
