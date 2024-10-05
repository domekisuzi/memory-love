//made by @domekisuzi at 2024/10/5:13:42

import axios from 'axios';

export const instance = axios.create({
    baseURL: '/api', // 根据实际情况修改后端服务器的地址
    timeout: 1000,
    withCredentials: true,  // 允许跨域请求携带 Cookie
});

export const collect = axios.create({
    baseURL: '/collect', // 根据实际情况修改后端服务器的地址
    timeout: 1000,
    withCredentials: true,  // 允许跨域请求携带 Cookie
});

