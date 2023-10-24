import axios from 'axios';
// import BASE_API_URL from '../util/constant'

const BASE_URL = "https://clotho-server-86d0aaea42a8.herokuapp.com/api";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosJWT = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const axiosImg = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'multipart/form-data'},
});

