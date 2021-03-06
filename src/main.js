// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
import utils from './utils/index'
// 将API方法绑定到全局,用Vue.prototype
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.prototype.$utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
