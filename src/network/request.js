//自己封装的axios函数
import axios from 'axios';

export function request(config) {
    //创建一个axios实例
    const instance = axios.create({
        baseURL: 'http://192.168.1.104:8080',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
    });
    // 请求拦截
    // instance.interceptors.request.use(config => {
    //         //请求成功拦截
    //         return config
    //     }, err => {
    //         console.log(' 请求拦截失败');
    //     })
    //     //响应拦截
    // instance.interceptors.response.use(res => {
    //     // 对数据进行过滤
    //     return res.data
    // }, err => {
    //     console.log('响应拦截失败');

    // });

    //真正的发送请求，相当于 axios({ }),因为它本身就是一个promise所以就直接把它return出去
    return instance(config);
}