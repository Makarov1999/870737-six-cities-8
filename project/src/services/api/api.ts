import axios, {AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios';
import { getToken } from '../token/token';
import { BASE_URL, HttpCode, REQUEST_TIMEOUT } from './api.constants';

export const createApi = (onUnauthorized: VoidFunction): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;
      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }
      return Promise.reject(error);
    });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config.headers['x-token'] = token;
      }
      return config;
    });
  return api;
};
