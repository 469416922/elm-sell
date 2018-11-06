import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import sell from '@/components/sell/sell'
// 在全局引用样式
import '@/common/stylus/index.styl'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    }, {
      path: '/sell',
      component: sell
    }
  ],
  linkActiveClass: 'active'
})
