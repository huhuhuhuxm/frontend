// axios的封装处理
// 1.根域名处理
// 2.超时时间
// 3.请求拦截器/响应拦截器

import axios from 'axios'
import { error } from 'console'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

//添加请求拦截器
request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

//响应拦截器
request.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export {request}
