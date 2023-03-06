<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav v-if="!isAuthenticated()">
      <ul>
        <li><router-link to="/landingpage">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
        <li><router-link to="/login">Log In</router-link></li>
      </ul>
    </nav>
    <nav v-if="isAuthenticated()">
      <ul>
        <li><router-link to="/landingpage">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><button @click="logoutUser">logout</button></li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import {useStore, mapActions} from 'vuex'

const store = useStore()
mapActions(['logoutUser'])
const logoutUser = () => {
    store.commit('logoutUser')

}

const isAuthenticated = () => localStorage.getItem("loggedInToken");
// console.log(isAuthenticated());
</script>

<style lang="scss" scoped></style>
