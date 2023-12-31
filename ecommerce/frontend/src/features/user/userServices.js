import axios from "axios";

const register = async (userData) => {
 // Define the userData variable
  const response = await axios.post("", userData);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
};
