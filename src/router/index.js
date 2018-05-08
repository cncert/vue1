import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'  //@ 是 webpack 定义的别名,代指src目录，详见build/webpack.base.conf.js
import content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/content/:id',
      component: content
    }
  ]
})
