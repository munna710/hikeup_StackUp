import axios from "axios";
import { base_url } from "../../utils/axiosConfig";


const getProducts = async (category) => {
  const response = await axios.get(`${base_url}product?category=${category}`);
  if (response.data) {
    return response.data;
  }
};

export const productService = {

 getProducts
  
};
