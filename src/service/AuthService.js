import axios from "axios";

const AUTH_API_URL = "http://localhost:8080/auth/sign-up";

export const signUp = (payload) => {
    return axios.post(AUTH_API_URL, payload)
}