import axios from "axios";

const port = 8763;

const setting = axios.create({
    baseURL: 'http://localhost:' + port + '/',
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