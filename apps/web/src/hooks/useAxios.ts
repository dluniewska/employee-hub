import axios, { AxiosInstance } from 'axios';
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

        instance.interceptors.response.use(response => {
            return response;
        });

        return instance;
    }, []);

    return axiosInstance;
};

export default useAxios;