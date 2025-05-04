import axios from "axios";
import { jwtDecode } from "jwt-decode"; // ✅ Fixed import
import dayjs from "dayjs";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const baseURL = "http://localhost:5000/api";

const useAxios = () => {
  const { accessToken, refresh } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!accessToken) return req;

    try {
      const user = jwtDecode(accessToken); // ✅ Now using jwtDecode
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) {
        req.headers.Authorization = `Bearer ${accessToken}`;
        return req;
      }

      const newToken = await refresh();
      req.headers.Authorization = `Bearer ${newToken}`;
      return req;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return req;
    }
  });

  return axiosInstance;
};

export default useAxios;