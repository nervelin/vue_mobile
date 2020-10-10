import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)
// 持久化存储token
const Token = 'TouTiaoToken'
export default new Vuex.Store({
  state: {
    // 存储用户信息(token)
    // user: null
    user: getItem(Token)
  },
  mutations: {
    // 修改用户信息
    setUser(state, userInfo) {
      state.user = userInfo
      // window.localStorage.setItem(Token, JSON.stringify(state.user))
      setItem(Token, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
