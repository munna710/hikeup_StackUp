import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getCategories = async () => {
    const response = await axios.get(`${base_url}category/`);

    return response.data;
};
const createCategory = async (category) => {
    const response = await axios.post(`${base_url}category/`, category, config);

    return response.data;
};

const getCategory = async (id) => {
    const response = await axios.get(`${base_url}category/${id}`, config);

    return response.data;
};

const deleteCategory = async (id) => {
    const response = await axios.delete(`${base_url}category/${id}`, config);

    return response.data;
};
const updateCategory = async (category) => {
    console.log(category);
    const response = await axios.put(
        `${base_url}category/${category.id}`,
        { title: category.pCatData.title },
        config
    );

    return response.data;
};
const categoryService = {
    getCategories,
    createCategory,
    getCategory,
    deleteCategory,
    updateCategory,
};

export default categoryService;
