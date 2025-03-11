import axios from "axios"

axios.defaults.withCredentials = true;

// The API base URL is read from environment variables. In Vite, variables must start with VITE_ to be exposed.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/v1";

const register = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

const login = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

const logout = async () => {
  return axios.post(`${API_URL}/logout`);
};

export default { login, register, logout };