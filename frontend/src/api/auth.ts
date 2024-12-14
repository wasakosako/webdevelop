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



export const authApi = {

  async signup(user:userProps,login:(user:userProps)=>void) {
    const result = await axios.post(ENDPOINT_URL+"/signup", user);
    if(result.status!==200){
      return {"msg":"エラーです"};
    }
    sessionStorage.setItem("token",result.data.token);
    const data={...user,token:result.data.token as string}
    login(data);
    return result.data;
  },
  async login(user:userProps,login:(user:userProps)=>void){
    const result=await axios.post(ENDPOINT_URL+"/login",user);
    if(result.status!==200){
      return {"msg":"エラーです"};
    }
    sessionStorage.setItem("token",result.data.token);
    const data={...user,token:result.data.token as string}
    login(data);
    return result.data
  },
  async tokencheck(user:userProps){
    const result=await axios.post(ENDPOINT_URL+"/tokencheck",user);
    sessionStorage.removeItem("token");
    return result.data
  }
};
