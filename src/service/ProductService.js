import axiosClient from "../axios/axiosClient";

const PRODUCT_PUBLIC_REST_API_URL = 'http://localhost:8080/products/public';

export const listProducts = (page = 0, size = 6) => {
    return axiosClient.get(`${PRODUCT_PUBLIC_REST_API_URL}?page=${page}&size=${size}`);
}

export const getProductById = (productId) => {
    return axiosClient.get(`${PRODUCT_PUBLIC_REST_API_URL}/${productId}`);
}

export const getProductByCategory = (categoryId) => {
    return axiosClient.get(`${PRODUCT_PUBLIC_REST_API_URL}/category/${categoryId}`);
}

export const getfeaturedProducts = () => {
    return axiosClient.get(`${PRODUCT_PUBLIC_REST_API_URL}/featured`);
}

export const getAverageRatingByProductId = (productId) => {
    return axiosClient.get(`${PRODUCT_PUBLIC_REST_API_URL}/averageRatings/${productId}`);
}