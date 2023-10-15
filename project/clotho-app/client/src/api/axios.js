import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosJWT = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    
    //withCredentials: true
});