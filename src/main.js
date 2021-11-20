import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import clickOutside from './directives/clickOutside'
import './assets/css/styles.css'
import './assets/css/tailwind.css'
import VueClazyLoad from 'vue-clazy-load'
Vue.use(VueClazyLoad)

Vue.directive('click-outside', clickOutside);

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    store,
}).$mount('#app')
