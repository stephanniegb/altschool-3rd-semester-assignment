import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    // currentUser: {email: 'stephanie@gmail', password: '123456'},
    newUser: {},
    userDetail: {}
  },
  getters: {
    // getCurrentuser: (state) => state.currentUser,
    getnewUser: (state) => state.newUser,
    getUserDetails: (state) => state.userDetail
  },
  mutations: {
    // setCurrentUser(state, payload) {
    //   state.currentUser = payload
    //   state.newUser.push(payload)
    // },
    registerUser(state, payload) {
      state.newUser = payload
      localStorage.setItem('user', JSON.stringify(payload))
      alert('come and seeee ooooooo')
      router.push('/products')
      // state.newUser.push(payload)
    },
    loginUser(state, payload){
      state.userDetail = payload
      const registeredUser = JSON.parse(localStorage.getItem('user'))
      if(!registeredUser){
        alert('wrong email or password')
      }
      if(payload.email === registeredUser.email && payload.password === registeredUser.password){
        localStorage.setItem('loggedInToken', Date.now())
        alert('logged in')
        router.push('/products')
      } else {
        alert('wrong email or password')
      }
      

    },
    logoutUser(state){
      state.newUser = {}
      localStorage.removeItem('loggedInToken') //change to token
      router.push('/')
      alert('logged out')
    }

  },
  actions: {
    // async things

  }
})
