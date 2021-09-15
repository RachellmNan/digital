import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

const route = {
    routes: [{
        path: '/',
        name: 'Index',
        component: ()=>import('../page/index.vue')
    }]
}

const router = new Router(route)

export default router