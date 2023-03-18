import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    newUser: {},
    userDetails: {},
    products: [],
    isNotregistered: false,
    isWrong: false
  },
  getters: {
    getnewUser: (state) => state.newUser,
    getUserDetails: (state) => state.userDetails,
    getProductInfo: (state) => state.products,
  },
  mutations: {
    registerUser(state, payload) {
      state.newUser = payload
      localStorage.setItem('user', JSON.stringify(payload))
      router.push('/products')
    },
    loginUser(state, payload){
      state.userDetails = payload
      const registeredUser = JSON.parse(localStorage.getItem('user'))
      if(!registeredUser){
        state.isNotregistered = true
      }
      if(payload.email === registeredUser.email && payload.password === registeredUser.password){
        localStorage.setItem('loggedInToken', Date.now())
        router.push('/products')
      } else {
        state.isWrong = true
      }
      

    },
    logoutUser(state){
      state.newUser = {}
      localStorage.removeItem('loggedInToken') 
      router.push('/')
    },
    updateProducts(state, payload){
      state.products = payload
    }

  },
  actions: {
    reset(context){
      setTimeout(() => {
        context.state.isWrong = false
        context.state.isNotregistered = false
      }, 3000);
    }
  }
})
