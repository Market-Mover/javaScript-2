
export default {
  state: {
    cart: []
  },
  getters: {
    cart: state => {
      return state.cart
    },
    cartCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    totalPrice: state => {
      let price = 0
      state.cart.forEach(item => {
        price += (item.quantity * item.product.price)
      })
      return price
    }

  },
  mutations: {
    ADD_ITEM_TO_CART: (state, {product, quantity}) => {
      let exist = state.cart.find(item => item.product._id === product._id)
      if(exist) {
        exist.quantity += quantity
      }else {
        state.cart.push({product, quantity})
      }
    },
    DELETE_ITEM: (state, product) => {
      state.cart.splice(state.cart.indexOf(product), 1)
      // state.cart = state.cart.filter(product => product !== product)
    }
  },
  actions: {
    addItemToCart: ({commit}, { product, quantity }) => {
      commit('ADD_ITEM_TO_CART', {product, quantity})
    },
    deleteItem: ({commit}, product) => {
      commit('DELETE_ITEM', product)
    }
  }
}