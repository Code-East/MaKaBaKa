import { request } from "./request";
// 获取商品
export function getGoods(config) {
    return request({
        url: '/makabaka/selectLimitCommodityAndCount',
        params: config
    })
}
// 增加商品
export function addGoods(config) {
    return request({
        url: "/makabaka/InsertCommodityAdd4",
        processData: false,
        contentType: false,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'post',
        data: config
    })
}
// 查询商品
export function searchGoods(config) {
    return request({
        url: '/makabaka/selectLimitCommodityAndCount',
        params: config
    })
}
// 删除商品
export function delGoods(commodity_id) {
    return request({
        url: '/makabaka/delectIdCommodity',
        params: { commodity_id },
    })
}
// 获取分类
export function getClassIfy(config) {
    return request({
        url: "/makabaka/selectCommodityType",
        data: config
    })
}
// 删除分类
export function delType(id) {
    return request({
        url: '/makabaka/deleteIdCommodity_type',
        params: { id },
    })
}
// 获取单个分类
export function getType(id) {
    return request({
        url: '/makabaka/selectIdCommodity_type',
        params: { id },
    })
}
// 修改分类
export function setType(config) {
    return request({
        url: '/makabaka/updateIdCommodity_type',
        method: 'post',
        params: config,
    })
}
// 增加分类
export function addType(type_name) {
    return request({
        url: "/makabaka/insertCommodity",
        params: { type_name }
    })
}