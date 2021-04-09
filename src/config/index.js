import axios from 'axios';

const SERVER_URL = `http://localhost:3500`;

const axiosInstance = axios.create({
    baseURL: SERVER_URL
});

export default {
    axiosInstance,
    SERVER_URL
}