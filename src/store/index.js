import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin/admin'
import {user} from 'sp-layout'
import createLogger from '../plugins/logger'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
      admin,
      user
    },
    mutations: {

    },
    strict: debug,
    plugins: debug ? [createPersistedState({
        paths: ['main']
    }), createLogger()] : [createPersistedState({
        paths: ['main']
    })]
})
