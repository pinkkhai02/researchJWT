import axios from "../util/axios.customize";

const createUserApi = (name, email, password) => {
  const API_URL = "/v1/api/register";
  const data = { name, email, password };

  return axios.post(API_URL, data);
};

export { createUserApi };
