import React, { createContext, useState, useEffect, useCallback } from "react";
import { IAuthContext } from "~/types/providers/types.authContext";
import { BaseUserDto, TokenResponseDto } from "shared-types";
import { apiAxiosInstance } from "~/components/services/apiService";

const defaultContextValue: IAuthContext = {
  user: null,
  token: null,
  login: async () => { },
  logout: async () => { },
  authme: async () => { },
};

// Create the context
export const AuthContext = createContext<IAuthContext>(defaultContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  const [user, setUser] = useState<BaseUserDto | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Load initial auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedJwt = localStorage.getItem("token");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedJwt) setToken(JSON.parse(storedJwt));
  }, []);

  // Login function
  const login = useCallback(async (username: string, password: string): Promise<void> => {
    try {
      const response = await apiAxiosInstance.post('/auth/login', { username, password });
      const { user, token } = response.data as TokenResponseDto;

      console.log("dame", user, token)

      setUser(user);
      setToken(token);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(token));

    } catch (error) {
      console.error('Login failed:', error);
    }
  }, [user, token]);


  // Logout function
  const logout = useCallback(async () => {
    // Implement logout logic
    // Update state and localStorage
  }, []);

  const validateUser = useCallback(async () => {
    // Implement logout logic
    // Update state and localStorage
  }, []);


  // Authme function
  const authme = useCallback(async (token: string): Promise<void> => {
    const response = await apiAxiosInstance.get('/auth/authme', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

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
