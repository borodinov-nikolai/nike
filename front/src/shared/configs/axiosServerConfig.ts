import axios from 'axios'


export const $serverAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  });


