import axios from "axios";
import { API_URL } from "./constants";

export const getProductList = () =>
  axios
    // **NOTE: AFFECTED BY HEROKU'S END OF FREE PLANS ON 28 OCT 2022**
    // .get(`${API_URL}/product`)
    .get(`${API_URL}/products.json`)
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
    // **NOTE: AFFECTED BY HEROKU'S END OF FREE PLANS ON 28 OCT 2022**
    // .get(`${API_URL}/product/${id}`)
    .get(`${API_URL}/products/${id}.json`)
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

// **NOTE: THIS ENDPOINT IS NOT WORKING ANYMORE AFTER HEROKU'S END OF FREE PLANS ON 28 OCT 2022**
// export const buyProduct = (data) =>
//   axios
//     .post(`${API_URL}/cart`, data)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         throw new Error(response.status);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
