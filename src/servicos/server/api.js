import axios from 'axios';

const api = axios.create({
   baseURL: 'https://montagem-app-dev.herokuapp.com',
});

export default api;
