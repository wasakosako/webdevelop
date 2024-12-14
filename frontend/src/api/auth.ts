import axios from "axios";
import { userProps } from "../types/atoms";
import { NavigateFunction } from "react-router-dom";

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

export type authapitype={
  signup:(user: userProps, login: (user: userProps) => void) => Promise<any>;
  login:(user: userProps, login: (user: userProps) => void) => Promise<any>;
  tokencheck:(user: userProps,navigate:NavigateFunction) => Promise<any>;
}

export const authApi:authapitype = {

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
  async tokencheck(user:userProps,navigate:NavigateFunction){
    const result=await axios.post(ENDPOINT_URL+"/tokencheck",user);
    if(user.token===undefined){
      return navigate("/");
    }
    console.log(user.token)
    sessionStorage.setItem("token",user.token);
    return result.data
  }
};
