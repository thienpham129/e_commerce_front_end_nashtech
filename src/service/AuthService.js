import axios from "axios";

const AUTH_API_URL = "http://localhost:8080/auth";

export const signUp = (payload) => {
    return axios.post(`${AUTH_API_URL}/sign-up`, payload)
}

export const signIn = (payload) => {
    return axios.post(`${AUTH_API_URL}/sign-in`, payload);
}