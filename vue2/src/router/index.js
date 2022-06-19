import Vue from 'vue';
import VueRouter from 'vue-router';
import Energy from '../pages/energy/index';
Vue.use(VueRouter);

//路由列表
const routes = [
    {
        path: '/energy',//新能源页面
        name: 'Energy',
        component: Energy
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router;