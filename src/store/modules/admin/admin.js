import Cookies from 'js-cookie';
import * as types from './type';
// import {userCookieExpires} from 'src/config/limitConfig'

// Cookies.defaults.expires = userCookieExpires; //cookie持续时间


const admin = {
  state: {
    // name: Cookies.get('name'),
    // token: Cookies.get('token'),
    // id: Cookies.get('id'),
    // theme: Cookies.get('theme'),
    layout:false
  },



  mutations: {

    // [types.SET_USER_ID]: (state, id) => {
    //   Cookies.set('id', id);
    //   state.id = id;
    // },
    // [types.SET_USER_TOKEN]: (state, token) => {
    //   Cookies.set('token', token);
    //   state.token = token;
    // },
    // [types.SET_USER_NAME]: (state, name) => {
    //   Cookies.set('name', name);
    //   state.name = name;
    // },
    // [types.SET_USER_THEME]: (state, theme) => {
    //   Cookies.set('theme', theme);
    //   state.theme = theme;
    // },
    // [types.CLEAR_USER]: (state, token) => {
    //   Cookies.remove('token');
    //   Cookies.remove('id');
    //   Cookies.remove('name');
    //   Cookies.remove('theme');
    //   state.id = null;
    //   state.token = null;
    //   state.name = null;
    //   state.theme = null
    // },
    [types.SET_SP_LAYOUT]:(state,layout)=>{
      if(layout){
        state.layout = true
      }else {
        state.layout = false
      }
    }
  },

  actions: {}
};

export default admin;
