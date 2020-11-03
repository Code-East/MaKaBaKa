import { request } from './request'

//是否存在前台用户
export function isUser(config) {
    return request({
        url: '/wuxidixi/dl/login',
        params: config
    });
}
//注册前台用户
export function inertUser(config) {
    return request({
        url: '/admin/logon',
        params: config
    });
}
//获取前台用户
export function getuser() {
    return request({
        url: '/admin/getuser',
    });
}