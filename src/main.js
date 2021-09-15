import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import Echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
