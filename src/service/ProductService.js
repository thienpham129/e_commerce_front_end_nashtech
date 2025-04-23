import axios from "axios";

const PRODUCT_PUBLIC_REST_API_URL = 'http://localhost:8080/products/public';

export const listProducts = () => {
    return axios.get(PRODUCT_PUBLIC_REST_API_URL);
}

export const getProductById = (productId) => {
    return axios.get(`${PRODUCT_PUBLIC_REST_API_URL}/${productId}`);
}
