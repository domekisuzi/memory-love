//made by @domekisuzi at 2024/10/5:13:42

import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://47.115.204.172:9876', // 根据实际情况修改后端服务器的地址
    timeout: 1000,
    withCredentials: true,  // 允许跨域请求携带 Cookie
});

export const collect = axios.create({
    baseURL: 'https://ip.011102.xyz', // 根据实际情况修改后端服务器的地址
    timeout: 1000,
    withCredentials: true,  // 允许跨域请求携带 Cookie
});

