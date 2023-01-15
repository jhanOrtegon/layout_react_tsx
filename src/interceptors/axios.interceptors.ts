import axios, { AxiosRequestConfig } from 'axios';
import { LocalStorageKeys, getInLocalStorage } from '@/utilities';


export const AxiosInterceptor = axios.create({
    baseURL: `https://rickandmortyapi.com/api`
})

const updateHeader = (request: AxiosRequestConfig) => {
    const token = getInLocalStorage(LocalStorageKeys.TOKEN);
    const newHeaders = {
      Authorization: token,
      'Content-Type': 'application/json'
    };
    request.headers = newHeaders;
    return request;
};

AxiosInterceptor.interceptors.request.use((request) => {
    return updateHeader(request);
})

axios.interceptors.response.use(
    (response) => {
      console.log('response', response);
    //   SnackbarUtilities.success('Success');
      return response;
    },
    (error) => {
        console.log('response', error);
    //   SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
);
