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

const ENDPOINT_URL = "/api/auth";

const authClient=axios.create({
  baseURL:ENDPOINT_URL,
  headers:{
    "Content-Type":"application/json",
  }
})

authClient.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem("authToken");
    if(token){

      config.headers.Authorization=`Bearer ${token}`
    }
    return config
},error=>{
  return Promise.reject(error);
}
)

export const authApi = {

  async signup(user:userProps) {
    const result = await axios.post(ENDPOINT_URL+"/signup", user);
    sessionStorage.setItem("token",result.data.token);
    return result.data;
  },
  async login(user:userProps){
    const result=await axios.post(ENDPOINT_URL+"/login",user);
    sessionStorage.setItem("token",result.data.token);
    return result.data
  },
  async logout(user:userProps){
    const result=await axios.post(ENDPOINT_URL+"/logout",user);
    sessionStorage.removeItem("token");
    return result.data
  }
};
