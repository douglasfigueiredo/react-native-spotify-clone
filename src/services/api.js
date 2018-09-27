import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.0.43:3000',
});

export default api;
