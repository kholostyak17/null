import axios from "axios";
import { API_URL } from "./constants";

export const getProductList = () =>
  axios
    .get(`${API_URL}/product`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    });

export const getProductById = (id) =>
  axios
    .get(`${API_URL}/product/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    });

export const buyProduct = (data) =>
  axios
    .post(`${API_URL}/cart`, data)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    });
