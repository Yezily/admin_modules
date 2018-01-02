/**
 * Created by DS on 2017/12/1.
 * http配置
 */
import axios from 'axios'
import store from './../store/index'
import {suffix, api, fetchTimeout} from '../config/staticEnv'
// import * as types from '../store/modules/admin/type'
import router from '../router/index'
import {Message} from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: fetchTimeout,            // 请求超时时间
  // headers: {'Content-Type': 'multipart/form-data'},
});

// service.defaults.method = 'post';

// http request 拦截器
service.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      //api 表示 添加虚拟路径
      // config.headers.token = store.state.admin.token;
    }
    else {
      if (config.token === undefined) {
        setTimeout(() => {
          //替换
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          });
        }, 3000);

        return Promise.reject({message: '用户登录信息已过期，请重新登录'});
      }
    }
    // 统一添加请求根路径 判断环境
    if (process.env.NODE_ENV !== 'production') {
      config.url = api + config.url

    } else {

    }

    // 不带参数默认加后缀
    if (config.suffix === undefined) {
      config.url += suffix;
    }
    // 为false不加
    else if (config.suffix === false) {

    }
    // 传了其他就带上其他的
    else {
      config.url += config.suffix;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
service.interceptors.response.use(
  response => {
    switch (response.status) {

      // case 401:
      //   // 401 清除token信息并跳转到登录页面
      //   store.commit(types.CLEAR_USER);
      //   setTimeout(() => {
      //     router.replace({
      //       path: '/login',
      //       query: {redirect: router.currentRoute.fullPath}
      //     });
      //   }, 2000);
      //   break;


      case 414:
        // 数据过长

        Message('数据超过700个字符,请删除多出部分~');
        return Promise.reject(response)
        break;

      case 200:
        switch (Number(response.data.code)) {
          case 200:
            return response.data;
            break;

          case 201:
            return response.data;
            break;

          case 203:
            // 203 清除token信息并跳转到登录页面
            store.commit('CLEAR_USER');
            Message('登录已过期，请重新登录');
            setTimeout(() => {
              router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath}
              });
            }, 2000);
            break;
          default:
            Message({
              message: response.data.errMsg ? response.data.errMsg : `系统异常~，:${response.data.status}`
              , type: 'error'
            });
            return Promise.reject(response.data)
        }
        return Promise.reject(response)

        break;
    }
  },
  error => {
    Message(`请求错误`);
    return Promise.reject(error)
  });

export default service;
