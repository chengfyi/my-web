import { createStore } from 'vuex'
import  ModuleUser  from './user'
import ModuleResult from './result'
import ModuleOrder from './orders'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    orders: ModuleOrder,
    result: ModuleResult
  }
})
