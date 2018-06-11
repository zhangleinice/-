import axios from 'axios';

const instance = axios.create({
    baseURL: '../../../data/Cityinside.json',
    withCredentials: false,   //跨域请求时是否需要使用凭证
    responseType: JSON,   //默认
    timeout: 5000,  //请求超时
    headers: {
        'Content-Type': 'application/json'   //现在基本采用json格式，必须发送json格式的字符串
    }
})

//  Add a request interceptor
instance.interceptors.request.use