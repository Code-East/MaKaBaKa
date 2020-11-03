import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
// 引入echarts
import echarts from 'echarts'
// 导入lazyload
import vuelazyload from "vue-lazyload"
// 嵌入echarts
Vue.prototype.$echarts = echarts
    // 安装ElementUi
Vue.use(ElementUI);

Vue.use(vuelazyload);

Vue.config.productionTip = false

Vue.use(vuelazyload, {
    preLoad: 1.3,
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')