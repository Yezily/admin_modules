// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router/index'
import {currency,generateTitle}  from './utils/filter'
import * as utils from './utils/util'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset_css.css'
import waves from 'src/directive/waves/index'
import './icons' // icon


Vue.use(ElementUI );

// 添加到Vue原型上
Object.defineProperty(Vue.prototype, '$utils', { value: utils });

// 注册全局自定义指令
/*水波纹*/
Vue.directive('waves',waves)

Vue.filter('generateTitle', generateTitle);
/* eslint-disable no-new */
const mainApp = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
export default mainApp
