import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    // currentUser: {email: 'stephanie@gmail', password: '123456'},
    allUsers: {},
    userDetail: {}
  },
  getters: {
    // getCurrentuser: (state) => state.currentUser,
    getAllUsers: (state) => state.allUsers,
    getUserDetails: (state) => state.userDetail
  },
  mutations: {
    // setCurrentUser(state, payload) {
    //   state.currentUser = payload
    //   state.allUsers.push(payload)
    // },
    registerUser(state, payload) {
      state.allUsers = payload
      localStorage.setItem('user', JSON.stringify(payload))
      alert('come and seeee ooooooo')
      router.push('/products')
      // state.allUsers.push(payload)
    },
    loginUser(state, payload){
      state.allUsers = payload
      const registeredUser = localStorage.getItem('user')
      if(payload.email === registeredUser.email && payload.password === registeredUser.password){
        localStorage.setItem('loggedIn', true)
        alert('logged in')
        router.push('/products')
      } else {
        alert('wrong email or password')
      }
      

    },
    logout(state){
      state.allUsers = {}
      localStorage.removeItem('user')
      alert('logged out')
    }

  },
  actions: {
    // async things

  }
})
