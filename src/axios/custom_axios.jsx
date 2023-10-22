import axios from "axios";

const AXIOS = axios.create({
  // with vite import env vars with import.meta.env
  baseURL: import.meta.env.VITE_BACKEND, // put backend api url here
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  //timeout: 5000, // 5 seconds
});

export default AXIOS;
