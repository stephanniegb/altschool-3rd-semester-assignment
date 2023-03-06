import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    newUser: {},
    userDetails: {}
  },
  getters: {
    getnewUser: (state) => state.newUser,
    getUserDetails: (state) => state.userDetails
  },
  mutations: {
    registerUser(state, payload) {
      state.newUser = payload
      localStorage.setItem('user', JSON.stringify(payload))
      router.push('/products')
    },
    loginUser(state, payload){
      state.userDetail = payload
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
    }

  },
  actions: {
    // async things

  }
})
