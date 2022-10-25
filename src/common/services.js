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
