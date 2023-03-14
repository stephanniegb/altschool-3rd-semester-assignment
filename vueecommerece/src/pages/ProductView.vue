<template>
  <div className="loader_wrapper" v-if="loading">
    <div class="loader"></div>
  </div>
  <main>
    <div>
      <Carousel :images="product.images" />
    </div>
    <div class="Product-right">
      <p>{{ product.category }}</p>
      <h2>{{ product.brand }}</h2>
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price }}</p>
      <p style="color: orangered; font-size: .8rem;">
        ${{ product.discountPercentage }}% off this item! use code:NEWBIE200
      </p>
      Rating - {{ product.rating }}/10
      <p><font-awesome-icon icon="fa-regular fa-clock" /> <span>Only {{ product.stock }} left</span></p>
      <p>Delivery in 3-5 days</p>
      <p>Return Policy: 7 days</p>
      <p>Delivery Charges: Free</p>
      <div class="btn_div">
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  </main>
</template>

<script setup>
// import {useStore} from 'vuex'
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Carousel from '@/layout/Carousel.vue'
// const store = useStore()
const route = useRoute();
const product = ref([]);
const loading = ref(false);
const fetchProductDetails = async () => {
  loading.value = true;
  const endPoint = `https://dummyjson.com/products/${route.params.id}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  product.value = data;
  loading.value = false;
  // store.commit('updateProducts', products.value)
};
onMounted(() => {
  fetchProductDetails();
});
// const test = Array.from(document.querySelectorAll('*')).find(e => e.__vue_app__).__vue_app__.config.globalProperties.$store.state
// console.log(test);
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
.imageOpt{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.imageOpt img{
  width: 100px;
  height: 100px;
  margin: 10px;
}
img {
  width: 400px;
}
.price{
  color: rgb(5, 5, 37);
  font-size: 1.2rem;
  font-weight: bold;
}
.btn_div{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}
.btn_div button{
  border: none;
  background-color: #0076c8;
  color: white;
  border-radius: 5px;
  padding: 2% 3%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer
}
.Product-right {

}
</style>
