import axios, { CancelTokenSource, AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import { TOKEN_COOKIE } from '../constants/global';

const cookies = new Cookies();

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

axios.interceptors.request.use(
  config => {
    const token = cookies.get(TOKEN_COOKIE);
    if (token) {
      config.headers.Authorization = token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export const request = async (
  method: METHODS,
  url: string,
  source: CancelTokenSource,
  options?: object
) => {
  try {
    const { data } = await axios({
      method,
      url,
      cancelToken: source.token,
      ...options
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const extractAxiosErrorResponse = (error: AxiosError): string => {
  if (error.response) {
    const { data } = error.response;

    return data.message;
  }
  return '';
};
