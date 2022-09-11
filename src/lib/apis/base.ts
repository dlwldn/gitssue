import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { BASE_URL, HTTP_METHODS } from '../consts/api';

const baseAxios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const handleRequestConfig = (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${process.env.REACT_APP_GIT_ACCESS_TOKEN}`,
    },
  };
};

const createApi =
  (axiosInstance: AxiosInstance, methodType: Method) =>
  (config: AxiosRequestConfig) => {
    return axiosInstance({
      ...handleRequestConfig(config),
      method: methodType,
    });
  };

export default {
  get: createApi(baseAxios, HTTP_METHODS.GET),
};
