import axios from "axios";
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = userStore.loginData.token;
    if (token && config.url !== "/login") {
      // login 用来获取token的，不需要携带token
      config.headers && (config.headers["Authorization"] = `Bearer ${token}`); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { data } = response;
    if (!data) {
      // 返回“[HTTP]请求没有返回值”;
      throw new Error();
    }
    // 二进制数据则直接返回
    const binary = ["blob", "arraybuffer"];
    if (binary.includes(response.request.responseType)) {
      return response;
    }
    if (Number(data.code) === 401) {
      // 登陆过期
    } else if (Number(data.code) !== 0 && !data.success) {
      // 非 200 状态码统一显示错误提示
    }
    return data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
