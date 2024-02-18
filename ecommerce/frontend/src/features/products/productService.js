import axios from "axios";
import { base_url,config} from "../../utils/axiosConfig";


const getProducts = async (category) => {
  const response = await axios.get(`${base_url}product?category=${category}`);
  if (response.data) {
    return response.data;
  }
};
const getProducts2 = async () => {
  const response = await axios.get(`${base_url}product`);
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
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data,config);
  if (response.data) {
      return response.data;
  }
};
export const productService = {

 getProducts,
 addTowishlist,
 getSingleProduct,
 getProducts2,
 rateProduct
  
};
