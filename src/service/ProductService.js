import axios from "axios";

const PRODUCT_PUBLIC_REST_API_URL = 'http://localhost:8080/products/public';

export const listProducts = () => {
    return axios.get(PRODUCT_PUBLIC_REST_API_URL);
}

export const getProductById = (productId) => {
    return axios.get(`${PRODUCT_PUBLIC_REST_API_URL}/${productId}`);
}

export const getProductByCategory = (categoryId) => {
    return axios.get(`${PRODUCT_PUBLIC_REST_API_URL}/category/${categoryId}`);
}

export const getfeaturedProducts = () => {
    return axios.get(`${PRODUCT_PUBLIC_REST_API_URL}/featured`);
}

export const getAverageRatingByProductId = (productId) => {
    return axios.get(`${PRODUCT_PUBLIC_REST_API_URL}/averageRatings/${productId}`);
}