import axiosClient from "../axios/axiosClient";

const CATEGORY_PUBLIC_API_URL = "http://localhost:8080/categories/public";

export const listCategories = () => {
    return axiosClient.get(CATEGORY_PUBLIC_API_URL);
}