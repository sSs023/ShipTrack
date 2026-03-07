import { addToast } from "@heroui/react";
import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

export const request = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: import.meta.env.VITE_PUBLIC_BASE_URL,
});

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}[] = [];

function processQueue(error: unknown, token: string | null = null) {
  failedQueue.forEach(({ resolve, reject }) => {
    if (token) {
      resolve(token);
    } else {
      reject(error);
    }
  });
  failedQueue = [];
}

function logout() {
  const cookies = new Cookies();
  cookies.remove("access", { path: "/" });
  cookies.remove("refresh", { path: "/" });
  window.location.href = "/login";
}

request.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const accessToken = cookies.get("access");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response?.data ?? response,
  async (error: AxiosError<{ detail: string }>) => {
    if (error?.message === "canceled") {
      return Promise.reject(error);
    }

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return request(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const cookies = new Cookies();
        const refreshToken = cookies.get("refresh");

        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const { data } = await axios.post<{ access: string; refresh: string }>(
          `${import.meta.env.VITE_PUBLIC_API_URL}/auth/token/refresh/`,
          { refresh: refreshToken },
        );

        cookies.set("access", data.access, { path: "/" });
        cookies.set("refresh", data.refresh, { path: "/" });

        processQueue(null, data.access);

        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return request(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        logout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    const errorMessage = error?.response?.data?.detail || "An error occurred";
    addToast({
      title: "Error",
      description: errorMessage,
      variant: "flat",
      color: "danger",
      severity: "danger",
    });

    return Promise.reject(error);
  },
);
