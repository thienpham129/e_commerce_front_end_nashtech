import axiosClient from "../axios/axiosClient";

const REVIEW_USER_REST_API_URL = 'http://localhost:8080/reviews'

export const getAllReviewByProduct = (productId, page = 0, size = 5) => {
    return axiosClient.get(`${REVIEW_USER_REST_API_URL}/public/user/product/${productId}?page=${page}&size=${size}`);
}

export const addOrUpdateReview = (productId, reviewData) => {
    return axiosClient.post(`${REVIEW_USER_REST_API_URL}/user/${productId}`, reviewData);
}

export const deleteOwnByUser = (reviewId) => {
    return axiosClient.delete(`${REVIEW_USER_REST_API_URL}/user/${reviewId}`);
}