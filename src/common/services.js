import { API_URL } from "./constants";

export const getProductList = () =>
  fetch(`${API_URL}/product`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    });

export const getProductById = (id) =>
  fetch(`${API_URL}/product/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    });

export const buyProduct = (data) =>
  fetch(`${API_URL}/cart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((error) => {
      console.error(error);
    });
