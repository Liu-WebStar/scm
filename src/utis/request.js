import axios from "axios";

const BASE_API=process.env.VUE_APP_BASE_API;

const request = axios.create({
  baseURL:BASE_API,
  timeout:60000
})

// 请求拦截器
request.interceptors.request.use(config=>{
  return config;
},error=>{
  return Promise.reject(error);
})
// 响应拦截器
request.interceptors.response.use(response=>{
  return response;
},error=>{
  return Promise.reject(error);
})

export default request;