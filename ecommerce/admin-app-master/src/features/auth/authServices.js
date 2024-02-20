import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  const response = await axios.post(`${base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
// const getOrders = async () => {
//   const response = await axios.get(`${base_url}user/getallorders`, config);

//   return response.data;
// };
const getOrder = async (id) => { 
  const response = await axios.get(`${base_url}user/getorderbyuser/${id}`, config);
  return response.data; 
};
const updateOrder = async (data) => { 
  const response = await axios.put(`${base_url}user/update-order/${data.id}`, {status: data.status},config);
  return response.data; 
};
const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all-users`, config);

  return response.data;
} ;
const getAllOrders = async () => {
  const response = await axios.get(`${base_url}user/getallorders`, config);

  return response.data;
} ;

const getMonthlyOrders = async () => {
  const response = await axios.get(
      `${base_url}user/getMonthWiseOrderIncome`,
      config
  );

  return response.data;
};
const getYearlyStats = async () => {
  const response = await axios.get(
      `${base_url}user/getYearlyTotalOrders`,
      config
  );

  return response.data;
};
const authService = {
  login,
  getOrder,
  getUsers,
  getAllOrders,
  getMonthlyOrders,
  getYearlyStats,
  updateOrder
};

export default authService;