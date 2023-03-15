<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="nav-container">
      <div>
        <router-link to="/landingpage"><h1 class="logo">gOShop</h1></router-link>
      </div>
      <ul>
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class="menu" v-if="!isAuthenticated()">
          <li :class="isactive('/') ? 'active': ''"><router-link to="/">Home</router-link></li>
          <li :class="isactive('/products') ? 'active': ''"><router-link to="/products">Products</router-link></li>
          <li :class="isactive('#contact_us') ? 'active': ''"><a href="#contact_us">Contact</a></li>
          <li :class="isactive('/signup') ? 'active': ''"><router-link to="/signup">Sign Up</router-link></li>
          <li :class="isactive('/login') ? 'active': ''"><router-link to="/login">Log In</router-link></li>
        </div>
        <div class="menu" v-if="isAuthenticated()">
          <li :class="isactive('/') ? 'active': ''"><router-link to="/">Home</router-link></li>
          <li :class="isactive('/products') ? 'active': ''"><router-link to="/products">Products</router-link></li>
          <li :class="isactive('#contact_us') ? 'active': ''"><a href="#contact_us">Contact</a></li>
          <li @click="logoutUser"><span>Logout</span></li>
        </div>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <hr>
  <footer id="contact_us">
    <div class=" col">
      <h1 class="logo">gOShop</h1>
      <h4>Contact</h4>
      <p><strong>Address:</strong> Lorem ipsum Vitae natus marepellendus.</p>
      <p><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon -Sat</p>
      <div class="follow">
        <h4>Follow Us</h4>
        <div class="icons">
          <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>


        </div>

      </div>

    </div>
    <div class="col">
      <h4>About</h4>
      <a href="#">About us</a>
      <a href="#">Our Services</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact us</a>
    </div>
    <div class="col">
      <h4>Help</h4>
      <a href="#">FAQ</a>
      <a href="#">Shipping</a>
      <a href="#">Returns</a>
      <a href="#">Order Status</a>
      <a href="#">Payment Options</a>
    </div>
    <div class="col install">
      <h4>Install App</h4>
      <p>from App store or Google play</p>
      <div class="row">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <p>Secure Payment Gateways</p>
      <div class="pay_row">
        <img src="" alt="">
    </div>
    </div>
  </footer>
</template>

<script setup>
import { useStore, mapActions } from "vuex";
import {  useRouter } from "vue-router";
// const route = useRoute();
const router = useRouter()

const store = useStore();

// const isactive = ref(false);
const isactive = (to) => {
  if (router.currentRoute.value.path === to) {
    return true;
  }
  else {
    return false;
  }
}
console.log(router.currentRoute.value.path)
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
  /* background-color: #6b76d4; */
  background-color: #0D0D0D;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  position: sticky;
}
.logo{
   color: #6b76d4;
   font-family: 'Tilt Warp', cursive;
   cursor: pointer;
}
.nav-container a{
  color: #fff;
}
.menu{
  display: flex;
  gap: 1em;
  font-size: 1 em;
  color: #fff;
}
.menu span{
  cursor: pointer;
}
.menu li:hover {
  /* background-color:  #9099f1; */
  border-bottom: 2px solid #9099f1;
  /* border-radius: 5px; */
  transition: 0.3s ease;
}
.menu li{
  padding: 5px 14px;
  box-sizing: border-box;
  border-bottom: 2px solid #0D0D0D;
}
 .menu li.active{
  border-bottom: 2px solid #9099f1;
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
  background-color: #9099f1;
}
@media(max-width: 768px){
  .menu{
    display: none;
    position: absolute;
    background-color: #0D0D0D;
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
