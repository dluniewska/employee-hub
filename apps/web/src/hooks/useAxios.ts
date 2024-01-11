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
            (response: AxiosResponse) => response,
            async (error: AxiosError) => {
                const originalRequest = error.config as InternalAxiosRequestConfig<any>;

                if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest.url?.includes('/auth')) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    window.location.href = "/login";
                }

                return error.response;
            }
        );

        return instance;
    }, []);

    return axiosInstance;
};

export default useAxios;