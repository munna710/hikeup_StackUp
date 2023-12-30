import axios from "axios";

const register = async () => {
  const userData = {}; // Define the userData variable
  const response = await axios.post("", userData);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
};
