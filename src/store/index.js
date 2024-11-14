Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // state
    cart:[]
  },
  mutations: {
    addCart(state, payload) {
        state.cart.push(payload)
        }
  },
})
