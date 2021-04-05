import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products'
import Product from './modules/Product'
import Cart from './modules/Cart'
import User from './modules/User'
import Orders from './modules/Orders'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products,
    Product,
    Cart, 
    User,
    Orders
  }
})
