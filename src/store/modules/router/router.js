import * as types from './type'


const router = {
  state:{
    menus:[],
    addRouters:[],
    routerLoadDone:false
  },
  mutations:{
    [types.SET_ROUTER_LOADDONE]:(state,routerLoadDone)=>{
      state.routerLoadDone = routerLoadDone
    }
  },
  actions:{

  }
}
