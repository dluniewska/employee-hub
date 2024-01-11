import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useMemo } from 'react';
import { useAuth } from './useAuth';

const useAxios = (): AxiosInstance => {
    const { token } = useAuth();

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: import.meta.env.VITE_API_HOST,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        instance.interceptors.request.use(request => {
            return request;
        });

        instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            async (error: AxiosError) => {
                const originalRequest: {content: InternalAxiosRequestConfig<any> | any, _retry: Boolean} = { content: error?.config, _retry: false };
                console.log(error)

                if ((error.response?.status === 401 || error.response?.status === 403) && !error?.config?.url?.includes('/auth') && !originalRequest._retry) {
                    originalRequest._retry = true;
                    return instance.request(originalRequest.content);
                } 
                else if (!error?.config?.url?.includes('/auth')) {
                    // return window.location.href = "/login"
                }
                return error.response;
            }
        );

        return instance;
    }, []);

    return axiosInstance;
};

export default useAxios;