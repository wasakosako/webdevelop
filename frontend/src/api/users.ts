import axios from "axios";
import { userProps } from "../types/atoms";

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error.response.data.msg || '時間をおいてお試しください。');
});

const ENDPOINT_URL = "/api/Auth";

export const userApi = {

  async get(email:string) {
    const result = await axios.get(ENDPOINT_URL + "/" + email);
    return result.data;
  },
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(user:userProps) {
    const result = await axios.post(ENDPOINT_URL, user);
    return result.data;
  },
  async delete(user:userProps) {
    const result = await axios.delete(ENDPOINT_URL + "/" + user.email);
    return result.data;
  },
  async patch(user:userProps) {
    const result = await axios.patch(ENDPOINT_URL + "/" + user.email, user);
    return result.data;
  },
};
