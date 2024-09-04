import axios from "../util/axios.customize";

const createUserApi = (name, email, password) => {
  const API_URL = "/v1/api/register";
  const data = { name, email, password };

  return axios.post(API_URL, data);
};

const loginApi = (email, password) => {
  const API_URL = "/v1/api/login";
  const data = { email, password };

  return axios.post(API_URL, data);
};
const getUserApi = () => {
  const API_URL = "/v1/api/user";
  return axios.get(API_URL);
};

export { createUserApi, loginApi, getUserApi };
