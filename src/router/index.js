import Vue from 'vue'
import Router from 'vue-router'
import main from './modules/main'
import store from 'src/store/index'
import {SET_SP_LAYOUT} from 'src/store/modules/admin/type'
// footerNav 是否需要底部导航

Vue.use(Router);


let router = new Router({
  routes: [
    ...main
  ]
})


router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    store.commit(SET_SP_LAYOUT, false);
    next()
  } else {
    store.commit(SET_SP_LAYOUT, true)
  }


  if (to.meta.requireAuth) {
    next()
  }
  else {
    if (store.state.user.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }

})


// router.afterEach(() => {
//
// })

export default router
