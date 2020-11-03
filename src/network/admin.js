import { request } from './request'
// 是否存在后台用户
export function isUser(config) {
    return request({
        url: '/admin/login',
        params: config
    });
}
// 注册后台用户
export function inertUser(config) {
    return request({
        url: '/admin/logon',
        params: config
    });
}
// 获取后台用户
export function getuser() {
    return request({
        url: '/admin/getuser',
    });
}