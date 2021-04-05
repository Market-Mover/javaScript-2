import axios from 'axios'
export default {
  state: {
    orders: [
      //fyller på med produkter från usern
    ]
  },
  getters: {
    orders: state => state.orders,
  },
  mutations: {
    //data är res.data från action som är en USER med en array av orders
    GET_ORDERS: (state, data) => {
      data.orders.forEach(order => {
        state.orders.push(order)
      }); 
    },
    CLEANUP: (state) => {
      state.orders = []
    }
  },
  actions: {
    getOrders: async ({commit}, email) => {
     //Hämtar en user vi sedan hämtar ordrar från
      let payload = {
        email: email
      }
      const res = await axios.post('http://localhost:9999/api/users/orders', payload)
      commit('GET_ORDERS', res.data)
    },
    cleanup: ({commit}) => {
      commit('CLEANUP')
    }
  }
}