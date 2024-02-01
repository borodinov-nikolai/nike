import axios from "axios";



const $backendAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
    timeout: 1000,
  });