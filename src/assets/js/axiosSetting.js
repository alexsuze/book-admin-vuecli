import axios from "axios";

const setting = axios.create({
    withCredentials: true
})

setting.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

setting.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

export const request = setting;