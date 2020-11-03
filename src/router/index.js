import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () =>
    import ("views/admin/login/Login");
const Logon = () =>
    import ("views/admin/logon/Logon");
const index = () =>
    import ("views/home/index");
const Detaile = () =>
    import ("views/detaile/Detaile");
const userLogin = () =>
    import ("views/userlogin/userLogin");
const Collection = () =>
    import ("views/collection/Collection");
const Cart = () =>
    import ("views/cart/Cart");
const backStage = () =>
    import ("views/admin/backstage/backStage");
const goodsData = () =>
    import ("views/admin/backstage/goodsdata/goodsData");
const userData = () =>
    import ("views/admin/backstage/userdata/userData");
const fileMe = () =>
    import ("views/admin/backstage/fileme/fileMe");
const goodsManage = () =>
    import ("views/admin/backstage/goodsmanage/goodsManage");
const goods = () =>
    import ("views/admin/backstage/goodsmanage/child/goods");
const classIfy = () =>
    import ("views/admin/backstage/goodsmanage/child/classIfy");
const addGoods = () =>
    import ("views/admin/backstage/goodsmanage/child/addGoods");
const addType = () =>
    import ("views/admin/backstage/goodsmanage/child/addType");
const settype = () =>
    import ("views/admin/backstage/goodsmanage/child/setType");
Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: 'userLogin' },
    { path: '/admin', component: Login },
    { path: '/logon', component: Logon },
    { path: '/index', component: index },
    { path: '/detaile', component: Detaile },
    { path: '/userlogin', component: userLogin },
    { path: '/collection', component: Collection },
    { path: '/cart', component: Cart },
    {
        path: '/backstage',
        component: backStage,
        children: [
            { path: '/', redirect: 'goodsData' },
            { path: 'goodsdata', component: goodsData },
            { path: 'fileme', component: fileMe },
            { path: 'userdata', component: userData },
            {
                path: 'goodsmanage',
                component: goodsManage,
                children: [
                    { path: '/', redirect: 'goods' },
                    { path: 'goods', component: goods },
                    { path: 'classify', component: classIfy },
                    { path: 'addgoods', component: addGoods },
                    { path: 'addtype', component: addType },
                    { path: 'settype/:type_id', component: settype },
                ]
            },
        ]
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router