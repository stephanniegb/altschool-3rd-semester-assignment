<template>
  <main>
    <button @click="handle">Clear</button>
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
      <section class="headings" id="hero_3">
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
const handle = () => {
  localStorage.clear()
}
onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
.hero_wrap {
  display: flex;
  flex-direction: column;
  /* background-repeat: no-repeat;
  background-color: transparent; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
  padding: 2%;
}
.hero_wrap img{
  /* height: 200px; */
  
}
.hero_1{
  background-image: url('../../assets/pexels-sora-shimazaki-5935744\(4\).jpg');
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  background-color: transparent;

}

#hero {
  /* flex-basis: 50%; */
}
#hero img {
  /* border-end-end-radius: 40%; */
  /* border-top-left-radius: 40%; */
}
#hero2 {
  /* flex-basis: 45%; */
}
#hero2 img{
  /* border-end-end-radius: 40%; */
  /* border-top-left-radius: 40%; */
  
}
.headings {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 0.7rem;
  justify-content: flex-start;
  align-items: flex-start;
}
#hero_3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.feature p{
  font-size: .8em;
}
 .banner{
  color:#d9042b;
  display: flex; 
  /* flex-direction: column; */
   align-content: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.banner h4{
    font-size: 1.5rem;
  }
 .headings h1 {
  color: #6b76d4;
  font-size: 2.5em;
  font-family: "Fugaz One", cursive;
}
.headings p {
  color: rgb(121, 117, 117);
}
/*.top_deals h2{
  font-size: 2em;
  font-weight: 800;
}*/
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
/* .categories_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
.category {
  padding: 2%;
  border: 2px solid #131212;
  font-family: "Tilt Warp", cursive;
  background-color: transparent;
  font-size: 0.9em;
  width: 150px;
  height: 50px;
} */
/* .category:hover {
  background-color: #ffdb58;
  box-shadow: 10px 10px 0px #d0d0d0;
  cursor: pointer; */
  /* color: #6b76d4; */
/* } */
/* h2 {
  padding: 2%;
}
.categories h2 {
  color: #d9042b;
  font-size: 2em;
} */

@media (min-width: 961px){
  .hero_1 img{
    display: block;
  }
  .hero_1{ 
    display: flex;
    background-image: none;
    /* background-image: url('../../assets/17973858.jpg'); */
    flex-direction: row;
    justify-content: space-between; 
    
    
  }
  .hero_wrap {
  display: flex;
  flex-direction: row;
  /* background-repeat: no-repeat;
  background-color: transparent; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
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
.features_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  
}
.feature p{
  font-size: 1em;
}
.banner{
  background-repeat: repeat;
}
.banner h4{
  padding: 4%;
  font-size: 2.3em;
} 
 
  .headings{
    /* flex-basis: 100%; */
    justify-content: center;
    align-items: center;
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
  }
  .headings h1{
    font-size: 4em;
  }
  /* .features_wrapper{
    grid-template-columns: 1fr 1fr 1fr;
  } */
  .categories_wrapper{
    grid-template-columns: 1fr 1fr;
  }
}
</style>
