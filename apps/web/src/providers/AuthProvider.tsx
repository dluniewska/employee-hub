import React, { createContext, useState, useEffect, useCallback } from "react";
import { IAuthContext } from "~/types/providers/types.authContext";
import { BaseUserDto, TokenResponseDto } from "shared-types";
import { ApiResponse } from "~types/types.apiResponse";
import { AxiosError } from "axios";
import useAxios from "~/hooks/useAxios";

const initialApiResponse: ApiResponse = {
  status: 0,
  data: null, 
  message: "" 
};

const defaultContextValue: IAuthContext = {
  user: null,
  token: null,
  login: () => Promise.resolve(initialApiResponse),
  logout: async () => { },
  authme: async () => { }
};

// Create the context
export const AuthContext = createContext<IAuthContext>(defaultContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  const [user, setUser] = useState<BaseUserDto | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const axios = useAxios();

  // Load initial auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedJwt = localStorage.getItem("token");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedJwt) setToken(JSON.parse(storedJwt));
  }, []);

  // Login function
  const login = useCallback(async (username: string, password: string): Promise<ApiResponse> => {
    let status = 500;
    let message: string = ""
    let data: any = null;

    try {
      const res = await axios.post('/auth/login', { username, password });
      const { user, token } = res.data as TokenResponseDto;

      status = res.status;
      message = res.statusText;
      data = res.data;

      console.log("login", user, token)

      setUser(user);
      setToken(token);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));

    } 
    catch (e) {
      message = "Error while logging user"
      if (e instanceof AxiosError) {
        console.log(e)
        status = e.response?.status ?? 500;  
        message = e.message
      }
    }
    return {status, data, message}

  }, []);


  // Logout function
  const logout = useCallback(async () => {
    try {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser(null);
      setToken(null);
    }
    catch (e) {
      console.error("Logout failed", e)
    }
    
  }, []);

  // Authme function
  const authme = useCallback(async () => {
    const storedUser = localStorage.getItem("user");
    const storedJwt = localStorage.getItem("token");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedJwt) setToken(JSON.parse(storedJwt));
  }, []);

  const contextValue: IAuthContext = {
    user,
    token,
    login,
    logout,
    authme,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
