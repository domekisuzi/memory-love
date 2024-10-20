//made by @domekisuzi at 2024/10/5:13:42

import axios from 'axios';

export const instance = axios.create({
    // baseURL: 'https://www.twy-memory-love.com.cn:9876', // 根据实际情况修改后端服务器的地址
    timeout: 1000,
    withCredentials: false,  //   不设置为false就会报错
});

export const collect = axios.create({
    baseURL: 'https://ip.011102.xyz', // 根据实际情况修改后端服务器的地址
    timeout: 1000,
    withCredentials: false,  // 不设置为false就会报错
});

