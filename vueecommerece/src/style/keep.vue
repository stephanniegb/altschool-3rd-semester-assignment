<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main>
      <div class="hero_wrap hero_1">
        <section class="headings">
          <h4>Trade-in-offer</h4>
          <h1>Amazing deals!</h1>
          <h2>On all products!</h2>
          <p>save more with coupons and up to 20% off</p>
          <router-link to="/products" class="btn">Shop Now!</router-link>
        </section>
        <section id="hero">
          <!-- <img
            src="https://free-vectors.net/_ph/10/2/718462586.jpg"
            alt="hero_img"
          /> -->
          <img src="../../assets/pexels-sora-shimazaki-5935744(4).jpg" alt="">
        </section>
      </div>
      <div>
        <h2>Features</h2>
        <div class="features_wrapper">
          <div class="feature">
            <h2><font-awesome-icon icon="fa-solid fa-truck-fast" /></h2>
            <h3>Free shipping</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div class="feature">
            <h2><font-awesome-icon icon="fa-solid fa-laptop" /></h2>
            <h3>Order online</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div class="feature">
            <h2><font-awesome-icon icon="fa-solid fa-piggy-bank" /></h2>
            <h3>Save money</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div class="feature">
            <h2><font-awesome-icon icon="fa-solid fa-rectangle-ad" /></h2>
            <h3>Promotions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div class="feature">
             <h2><font-awesome-icon icon="fa-solid fa-face-smile-beam" /></h2>
            <h3>Happy sell</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div class="feature">
          <h2><font-awesome-icon icon="fa-solid fa-headset" /></h2>
            <h3>24/7 support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
        </div>
      </div>
      <div class="hero_wrap">
        <section id="hero2">
          <!-- <img
            src="https://free-vectors.net/_ph/1/2/696495084.jpg"
            alt="hero_img"
          /> -->
          <img src="../../assets/pexels-kindel-media-6868619.jpg" alt="">
        </section>
        <div className="headings categories" v-if="loading">
          <div class="loader"></div>
        </div>
        <section class="headings categories" v-else-if="!loading">
          <h2>Explore our categories...</h2>
          <div class="categories_wrapper">
            <button
              v-for="category in categories"
              :key="category"
              class="category"
              @click="$router.push('/products')"
            >
              {{ category }}
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </button>
          </div>
        </section>
      </div>
      <div class="banner" style="height: 200px;">
        <h4>NEW ARRIVALS SUPER SALES!!!!!</h4>
        <h4>UP TO 45% OFF</h4>
  
      </div>
      <div className="headings categories" v-if="loading">
          <div class="loader"></div>
        </div>
      <div class="top_deals" v-else-if="!loading">
        <h2>Top deals</h2>
        <div class="product-container">
        <div v-for="product in products" :key="product.id" class="product" @click="$router.push(`/products/${product.id}`)">
          <figure>
            <div class="img_div">
              <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div>
              <figcaption>
                <span>{{product.brand}}</span>
                <h4>{{ product.title }}</h4>
                <div class="star" >
                  <font-awesome-icon icon="fa-solid fa-star" v-for="i in Math.floor(product.rating)" :key="i"/>
                </div>
                <div class="price_div">
                  <h5>${{ product.price }}</h5> <button @click="$router.push(`/products/${product.id}`)" class="view_button">
                    Shop
                    <font-awesome-icon icon="fa-solid fa-shopping-cart" />
                  </button>
                </div>
              </figcaption>
              
            </div>
          </figure>
        </div>
        </div>
        
        <!-- <img src="../../assets/17973858.jpg" alt="" style="height: 200px;"/> -->
      </div>
      <div class="hero_wrap">
        <section class="headings">
          <h2>Explore our best offers...</h2>
          <p>save more with coupons and up to 20% off</p>
          <router-link to="/products" class="btn">Shop Now!</router-link>
        </section>
        <section id="hero">
          <!-- <img
            src="https://free-vectors.net/_ph/1/2/319736785.jpg"
            alt="hero_img"
          /> -->
          <img src="../../assets/pexels-borko-manigoda-1778412.jpg" alt="">
        </section>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const categories = ref([]);
  const products = ref([])
  const loading = ref(false);
  
  const fetchCategories = async () => {
    loading.value = true;
    const endPoint = "https://dummyjson.com/products/categories";
    const endPoint2 = "https://dummyjson.com/products/category/smartphones"
    const response = await fetch(endPoint);
    const res = await fetch(endPoint2)
    const data = await response.json();
    const resData = await res.json()
    categories.value = data;
    products.value = resData.products.slice(1,6)
    loading.value = false;
  };
  onMounted(() => {
    fetchCategories();
  });
  </script>
  
  <style scoped>
  .hero_wrap {
    background-repeat: no-repeat;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
    padding: 2%; */
  }
  
  #hero {
    /* flex-basis: 50%; */
  }
  /* not part  */
  #hero img {
    /* border-end-end-radius: 40%;
    border-top-left-radius: 40%; */
  }
  #hero2 {
    /* height: 250px; */
  }
  
  #hero2 img{
    /* height: 100%; */
    
  }
  .headings {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
  }
  .features_div h2{
      /* font-size: 2em;
      font-weight: 800; */
  }
  .features_wrapper h2{
      text-align: center;
      font-size: 2em;
      font-family: "Fugaz One", cursive;
      color: #6b76d4;
  } 
   .features_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    /* font-size: .8em; */
  }
  .banner{
    /* color:#d9042b;
    display: flex; */
    /* flex-direction: column; */
    /* align-content: center;
    justify-content: center; */
  }
  .banner h4{
    /* padding: 4%;
    font-size: 2.3em; */
  }
  .headings h1 {
    color: #6b76d4;
    /* font-size: 4em; */
    font-family: "Fugaz One", cursive;
  }
  .headings p {
    color: rgb(121, 117, 117);
  }
  .top_deals h2{
    /* font-size: 2em; */
    font-weight: 800;
  
  }
  .headings .btn {
    padding: 3%;
    background-color: #ffdb58;
    color: #131212;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-family: "Fugaz One", cursive;
  }
  .headings .btn:hover {
    background-color: #6b76d4;
    color: #ffdb58;
  } 
  
   .categories_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: .5rem;
  }
  .category {
    padding: 2%;
    border: 2px solid #131212;
    font-family: "Tilt Warp", cursive;
    background-color: transparent;
    font-size: 0.9em;
    width: 150px;
    height: 50px;
  }
  .category:hover {
    background-color: #ffdb58;
    box-shadow: 10px 10px 0px #d0d0d0;
    cursor: pointer;
  }
  h2 {
    padding: 2%;
  }
  .categories h2 {
    color: #d9042b;
    font-size: 2em;
  }
  /*@media (max-width: 768px){ 
    /* .hero_wrap{
      background-image: url('../../assets/17973858.jpg');
      background-repeat: no-repeat;
      background-color: transparent;
    }
    .banner h4{
      font-size: 1.5rem;
    }
    .headings{
      flex-direction: column;
  
    }
    .headings h1{
      font-size: 2.5em;
    }
    .features_wrapper{
      grid-template-columns: 1fr 1fr 1fr;
    }
  
  } */
  
   @media(min-width:961px){
    .hero_wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
    }
    #hero {
    flex-basis: 50%;
  }
  #hero img {
    border-end-end-radius: 40%;
    border-top-left-radius: 40%;
  }
  #hero2 {
    flex-basis: 45%;
  }
  
  #hero2 img{
    border-end-end-radius: 40%;
    border-top-left-radius: 40%;
    
  }
    .headings {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    } 
    .features_div h2{
      font-size: 2em;
      font-weight: 800;
  }
  .features_wrapper h2{
      text-align: center;
      font-size: 2em;
      font-family: "Fugaz One", cursive;
      color: #6b76d4;
  }
  .features_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
  .banner{
    color:#d9042b;
    display: flex;
    /* flex-direction: column; */
    align-content: center;
    justify-content: center;
  }
  .banner h4{
    padding: 4%;
    font-size: 2.3em;
  }
  .headings h1 {
    color: #6b76d4;
    font-size: 4em;
    font-family: "Fugaz One", cursive;
  }
  .headings p {
    color: rgb(121, 117, 117);
  }
  .top_deals h2{
    font-size: 2em;
    font-weight: 800;
  
  }
  .headings .btn {
    padding: 3%;
    background-color: #ffdb58;
    color: #131212;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-family: "Fugaz One", cursive;
  }
  .headings .btn:hover {
    background-color: #6b76d4;
    color: #ffdb58;
  }
    /* categories style */
     .categories_wrapper {
    /* display: grid; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
  .categories h2 {
    color: #d9042b;
    font-size: 2em;
  } 
  .category {
    padding: 2%;
    border: 2px solid #131212;
    font-family: "Tilt Warp", cursive;
    background-color: transparent;
    font-size: 0.9em;
    width: 150px;
    height: 50px;
  }
  .category:hover {
    background-color: #ffdb58;
    box-shadow: 10px 10px 0px #d0d0d0;
    cursor: pointer;
  }
    
  } 
  </style>
  



  <!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header>
      <nav class="nav-container">
        <div>
          <router-link to="/landingpage"
            ><h1 class="logo">gOShop</h1></router-link
          >
        </div>
        <ul>
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div class="menu" v-if="!isAuthenticated()">
            <li :class="isactive('/') ? 'active' : ''">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="isactive('/products') ? 'active' : ''">
              <router-link to="/products">Products</router-link>
            </li>
            <li :class="isactive('#contact_us') ? 'active' : ''">
              <a href="#contact_us">Contact</a>
            </li>
            <li :class="isactive('/signup') ? 'active' : ''">
              <router-link to="/signup">Sign Up</router-link>
            </li>
            <li :class="isactive('/login') ? 'active' : ''">
              <router-link to="/login">Log In</router-link>
            </li>
          </div>
          <div class="menu" v-if="isAuthenticated()">
            <li :class="isactive('/') ? 'active' : ''">
              <router-link to="/">Home</router-link>
            </li>
            <li :class="isactive('/products') ? 'active' : ''">
              <router-link to="/products">Products</router-link>
            </li>
            <li :class="isactive('#contact_us') ? 'active' : ''">
              <a href="#contact_us">Contact</a>
            </li>
            <li @click="logoutUser"><span>Logout</span></li>
          </div>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <hr />
    <footer id="contact_us">
      <div class="info">
        <div class="col">
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
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p>Secure Payment Gateways</p>
          <div class="pay_row">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2023, steph etc - vue Ecommerce template</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { useStore, mapActions } from "vuex";
  import { useRouter } from "vue-router";
  // const route = useRoute();
  const router = useRouter();
  
  const store = useStore();
  
  // const isactive = ref(false);
  const isactive = (to) => {
    if (router.currentRoute.value.path === to) {
      return true;
    } else {
      return false;
    }
  };
  console.log(router.currentRoute.value.path);
  mapActions(["logoutUser"]);
  const logoutUser = () => {
    store.commit("logoutUser");
  };
  
  const isAuthenticated = () => localStorage.getItem("loggedInToken");
  // console.log(isAuthenticated());
  </script>
  
  <style scoped>
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    /* background-color: #6b76d4; */
    background-color: #0d0d0d;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    position: sticky;
  }
  .logo {
    color: #6b76d4;
    font-family: "Tilt Warp", cursive;
    cursor: pointer;
  }
  .nav-container a {
    color: #fff;
  }
  .menu {
    display: flex;
    gap: 1em;
    font-size: 1 em;
    color: #fff;
  }
  .menu span {
    cursor: pointer;
  }
  .menu li:hover {
    /* background-color:  #9099f1; */
    border-bottom: 2px solid #9099f1;
    /* border-radius: 5px; */
    transition: 0.3s ease;
  }
  .menu li {
    padding: 5px 14px;
    box-sizing: border-box;
    border-bottom: 2px solid #0d0d0d;
  }
  .menu li.active {
    border-bottom: 2px solid #9099f1;
  }
  
  input[type="checkbox"] {
    display: none;
  }
  .hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
  }
  button {
    background-color: rgb(107, 118, 212);
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
  }
  button:hover {
    background-color: #9099f1;
  }
  @media(max-width:481px){
  
  }
  @media (max-width: 768px) {
    footer p{
      font-size: .9em;
  
    }
  }
    .menu {
      display: none;
      position: absolute;
      background-color: #0d0d0d;
      right: 0;
      left: 0;
      text-align: center;
      padding: 16px 0;
    }
    .hamburger {
      display: block;
    }
    input[type="checkbox"]:checked ~ .menu {
      display: block;
    }
  
  footer .info{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  footer .col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%;
  }
  footer .follow{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%;
  
  }
  footer a:hover{
    color: #626bb9;
  }
  footer strong{
    color: #2c3e50;
    padding: .5em;
  }
  footer p{
    /* font-size: 1em; */
    margin: 0 0 .5em 0; 
    color: #9c9797;
  }
  footer a{
    text-decoration: none;
    font-size: 1em;
    margin: 0 1em 1em 0;
    color: #9c9797;
  }
  footer .logo{
    margin-bottom: 4%;
    
  }
  footer h4{
    font-size: 1.2em;
    margin-bottom: 8%;
  }
  footer .row .install img{
    border: 1px solid #0d0d0d;
    border-radius: 5px;
  }
  foooter .install{
    margin: 10px 0 15px 0;
  }
  </style>





@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Pacifico&family=Roboto&family=Tilt+Warp&display=swap');
#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #ffffff;
  }

  /* main{
    background-image: url('../../assets/pexels-sora-shimazaki-5935744\(4\).jpg');
    background-size: contain;
  } */
  .banner{
    background-image: url('../../assets/17973858.jpg');
    background-size: contain;
    /* background-repeat: no-repeat; */
  }
  @media(max-width:481px){
    .banner{
      background-repeat: no-repeat;
    }
    .hero_1{
      background-image: url('../../assets/pexels-sora-shimazaki-5935744\(4\).jpg');
      background-size: contain;
      width: 100%;
    }
    .product-container{
      grid-template-columns: 1fr 1fr;
    }
    
  }
  @media (max-width: 768px){
    .hero_1{
      background-image: url('../../assets/pexels-sora-shimazaki-5935744\(4\).jpg');
      background-size: cover;
      width: 100%;
    }
    .banner{
      background-repeat: no-repeat;
    }

    .hero_1 img{
      display: none;
    }
  }
  html{
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img{
    width: 100%;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .loader {
    border: 3px solid #ffffff;
    border-top: 3px solid rgb(107, 118, 212); 
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .loader_wrapper{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* carousel */
  .carousel {
    display: flex;
    flex-direction: column;
  }
  p{
    color: #465b52;
    margin: 15px 0 20px 0;
  }
  
  .carousel > img {
    max-width: 45%;
    max-height: 400px;
  }
  
  .carousel-smaller {
    display: flex;
    width: 50%;
  }
  
  .carousel-smaller > img {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    border: 2px solid #333;
  }
  
  .carousel-smaller > img.active {
    border-color: #333;
    opacity: 0.6;
  }
  .banner{
    /* background-image: url('../assets/17973858.jpg'); */
    height: 200px;
    object-fit: contain;
  }
  .view_button {
    background-color: #ffdb58;
    color: #131212;
    border: none;
    font-family: "Fugaz One", cursive;
    border-radius: 5px;
    padding: 2% 3%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    /* margin: 4px 2px; */
    cursor: pointer;
  }
  .view_button:hover{
    background-color: #6b76d4;
    color: #ffdb58;
  }
  .container {
    padding: 1%;
  }
  .product {
    background-color: #ffffff;
    padding: 3%;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    border: 2px solid #131212;
    gap: .5rem;
    cursor: pointer;
  }
  .product:hover {
    box-shadow: 5px 5px 5px rgba(233, 223, 223, 0.918);
    transition: all 0.2s ease-in-out;
  }
  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2%;
  }
  figcaption{
    display: flex;
    gap: .5rem;
    flex-direction: column;
    text-align: start;
  
  }
  figcaption span{
    color: #d4d4d4;
    font-size: .9em;
  }
  figure{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img_div {
    height: 200px;
    padding: 1%;
  }
  .img_div img{
      max-height: 100%;
      border-radius: 5px;
      object-fit: cover;
  }
  .price_div {
    display: flex;
    justify-content: space-between;
  }
  .price_div h5{
    font-size: 1.2em;
  }