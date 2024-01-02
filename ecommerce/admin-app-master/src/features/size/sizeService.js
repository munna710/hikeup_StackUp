import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getSizes = async () => {
  const response = await axios.get(`${base_url}size/`);

  return response.data;
};

const createSize = async (size) => {
  const response = await axios.post(`${base_url}size/`, size, config);

  return response.data;
};

const updateSize = async (size) => {
    const response = await axios.put(
      `${base_url}size/${size.id}`,
      { title: size.sizeData.title },
      config
    );
  
    return response.data;
  };

const getSize = async (id) => {
  const response = await axios.get(`${base_url}size/${id}`, config);

  return response.data;
};

const deleteSize = async (id) => {
  const response = await axios.delete(`${base_url}size/${id}`, config);

  return response.data;
};

const sizeService = {
  getSizes,
  createSize,
  updateSize,
  getSize,
  deleteSize,
};

export default sizeService;