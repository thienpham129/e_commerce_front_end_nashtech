import axios from "axios";

const CATEGORY_PUBLIC_API_URL = "http://localhost:8080/categories/public";

export const listCategories = () => {
    return axios.get(CATEGORY_PUBLIC_API_URL);
}