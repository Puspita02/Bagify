import { createContext, useState } from "react";
import axios from "axios"; // Use base axios here
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  // Base axios instance without interceptors for auth-related calls
  const authAxios = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
  });

  const login = async (username, password) => {
    const res = await authAxios.post("/login", { username, password });
    setAccessToken(res.data.accessToken);
    return res.data;
  };

  const logout = async () => {
    try {
      await authAxios.post("/logout");
    } finally {
      setAccessToken(null);
    }
  };

  const refresh = async () => {
    const res = await authAxios.post("/refresh");
    const newToken = res.data.accessToken;
    setAccessToken(newToken);
    return newToken;
  };

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      accessToken, 
      setAccessToken, 
      login, 
      logout, 
      refresh,
      isTokenExpired
    }}>
      {children}
    </AuthContext.Provider>
  );
};