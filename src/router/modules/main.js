/**
 * Created by DS on 2017/12/1.
 */

// 根目录单独路由
// 懒加载
const vm_404 = resolve => require(['src/view/error/404'], resolve);

// import  vm_login from 'src/components/login/login'

const vm_login  = resolve => require(['src/components/login/login'],resolve)

const vm_index = resolve => require(['src/view/layout/index'], resolve);
const vm_dashboard = resolve => require(['src/view/dashboard/index'], resolve);
const vm_homepage = resolve => require(['src/components/homePage/index'], resolve);

const login = {
  path: '/login',
  name: 'login',
  component: vm_login,
  meta: {
    requireAuth:true
  }
};


const error = {
  path: '*',
  name: '404',
  component: vm_404,
  meta: {
    // requireAuth: true
  }
};


const homepage = {
  path:'/homepage',
  name:'homepage',
  component:vm_homepage,
  meta:{}
};

const root = {
  path: '/',
  component: vm_index,
  redirect:'/index',
  children: [{
    path: 'index',
    name:'index',
    component: vm_dashboard,
    meta: {
      title:'index'
    }
  }],
  meta: {
  }
};




const main = [
  login,
  homepage,
  root,
  error
]

export default main
