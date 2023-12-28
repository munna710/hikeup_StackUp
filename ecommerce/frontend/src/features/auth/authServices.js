import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const register = async (user) => {
  const response = await axios.post(`${base_url}user/createUser`, user, config);
  return response.data;
};

const login = async (user) => {
  const response = await axios.post(`${base_url}user/loginUserCtrl`, user, config);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
  const response = await axios.post(`${base_url}user/logout`, {}, config);
  return response.data;
};

const resetPassword = async (email, newPassword) => {
  const response = await axios.put(`${base_url}user/resetPassword`, { email, newPassword }, config);
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getOrders`, config);
  return response.data;
};

const getOrder = async (id) => {
  const response = await axios.get(`${base_url}user/getOrderByUserId/${id}`, config);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  resetPassword,
  getOrders,
  getOrder,
};

export default authService;