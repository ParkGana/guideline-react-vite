import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
});

/* Request Interceptor */
api.interceptors.request.use(
  (config) => config,
  (error) => error
);

/* Response Interceptor */
api.interceptors.response.use(
  (response) => response,
  (error) => error
);

export default api;
