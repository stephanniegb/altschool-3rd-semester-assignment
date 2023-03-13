import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    newUser: {},
    userDetails: {},
    products: [],
    // loading: false,
    // error: null
  },
  getters: {
    getnewUser: (state) => state.newUser,
    getUserDetails: (state) => state.userDetails,
    getProductInfo: (state) => state.products,
    // getLoading: (state) => state.loading,
    // getError: (state) => state.error
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
        alert('wrong email or password')
      }
      if(payload.email === registeredUser.email && payload.password === registeredUser.password){
        localStorage.setItem('loggedInToken', Date.now())
        router.push('/products')
      } else {
        alert('wrong email or password')
      }
      

    },
    logoutUser(state){
      state.newUser = {}
      localStorage.removeItem('loggedInToken') 
      router.push('/landingpage')
    },
    updateProducts(state, payload){
      state.products = payload
    }

  },
  actions: {
    // async ['fetchProducts'] ({ commit }) {
    //   const endPoint = "https://dummyjson.com/products";
    //   try {
    //     commit('loading', true);
    //     const {response} = await fetch(endPoint);
    //     commit('products', response);

    //   }
    //   catch (err){
    //     commit('error', err);
    //     throw err;
    //   }
    //   finally {
    //     commit('loading', false);
    //   }
    // }

  }
})
