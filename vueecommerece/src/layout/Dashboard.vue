<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="nav-container">
      <div>
        <h1 class="logo">gOShop</h1>
      </div>
      <ul>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class="menu" v-if="!isAuthenticated()">
          <li><router-link to="/landingpage">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/signup">Sign Up</router-link></li>
          <li><router-link to="/login">Log In</router-link></li>
        </div>
        <div class="menu" v-if="isAuthenticated()">
          <li><router-link to="/landingpage">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><button @click="logoutUser">logout</button></li>
        </div>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
  <hr>
  <footer> contact us</footer>
</template>

<script setup>
import { useStore, mapActions } from "vuex";

const store = useStore();
mapActions(["logoutUser"]);
const logoutUser = () => {
  store.commit("logoutUser");
};

const isAuthenticated = () => localStorage.getItem("loggedInToken");
// console.log(isAuthenticated());
</script>

<style scoped>
.nav-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  background-color: rgb(107, 118, 212);
}
.logo{
   color: #00243C;
}
.nav-container a{
  color: #fff;
}
.menu{
  display: flex;
  gap: 1em;
  font-size: 1.5em;
}
.menu li:hover {
  background-color: red;
  border-radius: 5px;
  transition: 0.3s ease;
}
.menu li{
  padding: 5px 14px;
}
input[type=checkbox]{
  display: none;
}
.hamburger{
  display: none;
  font-size: 24px;
  user-select: none;
}
button{
  background-color: rgb(107, 118, 212);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  cursor: pointer;
}
button:hover{
  background-color: red;
}
@media(max-width: 768px){
  .menu{
    display: none;
    position: absolute;
    background-color: teal;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }
  .hamburger{
    display: block;
  }
  input[type=checkbox]:checked ~ .menu{
    display: block;
  }
}
</style>
