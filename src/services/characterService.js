import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/v1";

// Function to create a character
const createCharacter = async (characterData) => {
  return axios.post(`${API_URL}/character/create`, characterData);
};

// Function to check if the user already has a character
const checkIfUserHasCharacter = async () => {
  return axios.get(`${API_URL}/character/exists`);
};


export default { createCharacter, checkIfUserHasCharacter };