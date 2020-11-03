import { request } from "./request";

//获取用户
export function getUser(config) {
    return request({
        url: '/makabaka/selectLimitUserAndCount',
        params: config
    })
}
// 删除用户
export function delUser(id) {
    return request({
        url: '/makabaka/deleteIdUser',
        params: { id },
    })
}
// 查询用户
export function searchUser(config) {
    return request({
        url: '/makabaka/selectLimitUserAndCount',
        params: config
    })
}