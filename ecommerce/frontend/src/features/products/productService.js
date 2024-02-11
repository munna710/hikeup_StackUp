import axios from "axios";
import { base_url,config} from "../../utils/axiosConfig";


const getProducts = async (category) => {
  const response = await axios.get(`${base_url}product?category=${category}`);
  if (response.data) {
    return response.data;
  }
};
const addTowishlist = async (prodId) => {
  const response = await axios.put(`${base_url}product/wishlist`, { prodId },config);
  if (response.data) {
      return response.data;
  }
};


export const productService = {

 getProducts,
 addTowishlist
  
};
