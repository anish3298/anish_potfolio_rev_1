import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

const STORAGE_KEY = 'portfolioToken';

export const setToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    window.localStorage.setItem(STORAGE_KEY, token);
  } else {
    delete api.defaults.headers.common.Authorization;
    window.localStorage.removeItem(STORAGE_KEY);
  }
};

export const getToken = () => window.localStorage.getItem(STORAGE_KEY);
export const removeToken = () => setToken(null);

const initialToken = getToken();
if (initialToken) {
  api.defaults.headers.common.Authorization = `Bearer ${initialToken}`;
}

export default api;
