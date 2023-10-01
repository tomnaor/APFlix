import axios from "axios";

export const ApiAxiosInstance = axios.create({
  baseURL: `http://localhost:3000/`,
});
