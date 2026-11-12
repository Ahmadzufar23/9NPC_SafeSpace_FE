import axios from "axios";

// Instance umum
export const api = axios.create({
    // Di Docker (lewat gateway nginx) diisi "/api"; tanpa env tetap ke backend Vercel.
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://safespacebackend.vercel.app/api",
    withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Khusus unuk upload ke signed URL (tanpa baseURL, tanpa interceptor)
export const storageApi = axios.create();

// Header manual
export const headerAuth = (token) => token ? { Authorization: `Bearer ${token}` } : {};