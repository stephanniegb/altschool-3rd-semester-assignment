<template>
  <div className="loader_wrapper" v-if="loading">
    <div class="loader"></div>
  </div>
  <!-- {{ productsYouMightLike }} -->
  <section class="productView">
    <Carousel :images="product.images" />
    <div class="pro_details">
      <h5 id="brandh5">
        {{ product.category }}/ <strong>{{ product.brand }}</strong>
      </h5>

      <h2>{{ product.title }}</h2>

      <div class="star">
        <font-awesome-icon
          icon="fa-solid fa-star"
          v-for="i in rating"
          :key="i"
        />
      </div>
      <p style="color: orangered; font-size: 0.8rem">
        ${{ product.discountPercentage }}% off this item! use code:NEWBIE200
      </p>
      <h2>${{ product.price }}.00</h2>
      <div class="amount">
        <div>
          <button @click="decreament">&minus;</button>
          <span>{{ count }}</span>
        
        <button @click="increament">&plus;</button>
        </div>
        <h5 v-if="product.stock > 0">
          <strong>In stock</strong> <br />
          <font-awesome-icon icon="fa-regular fa-clock" /> only
          {{ product.stock }} left - order soon!
        </h5>
        <h5 v-if="product.stock <= 0">Out of stock</h5>
      </div>
      <p>Delivery in 3-5 days</p>
      <p>Return Policy: 7 days</p>
      <div class="btn_div">
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
      <div>
        <h4>Product Details</h4>

      <p>
        {{ product.description }} Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Perspiciatis voluptatem, repellendus rerum ea sit
        alias omnis molestias possimus quod recusandae obcaecati quibusdam
        exercitationem mollitia culpa eaque hic, veritatis voluptatum quaerat.
      </p>
      </div>
    </div>
  </section>
  <section class="might_like">
    <h2>You might also like</h2>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Carousel from "@/layout/Carousel.vue";

const route = useRoute();
const rating = ref([]);
const product = ref([]);
// const productsYouMightLike = ({})
const count = ref(0);
const loading = ref(false);
// const isLoading = ref(false)

const increament = () => {
  if (count.value < product.value.stock) {
    count.value++;
  }
};
const decreament = () => {
  if (count.value > 0) {
    count.value--;
  }
};
const looper = (times) => {
  for (let i = 0; i < Math.floor(times); i++) {
    rating.value.push(i);
  }
  return rating;
};

const fetchProductDetails = async () => {
  loading.value = true;
  const endPoint = `https://dummyjson.com/products/${route.params.id}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  product.value = data;
  looper(product.value.rating);
  // console.log(product.value.category);
  
  loading.value = false;
};
// const fetchCproducts = async () => {
//   isLoading.value = true
//   const end = `https://dummyjson.com/products/1`
//   const res = fetch(end)
//   const data = await res.json()
//   productsYouMightLike.value = data
//   isLoading.value = false

// }
// const fetchProducts = async () => {
//   isLoading.value = true
//   // const endPoint = `https://dummyjson.com/products/category/${category}`
//   const endPoint = 'https://dummyjson.com/products/category/smartphones'
//   const res = await fetch(endPoint)
//   const resData = await res.json()
//   productsYouMightLike.values = resData
//   isLoading.value = false
// }
onMounted(() => {
  fetchProductDetails();
  // fetchCproducts()
});
// console.log(product.value);
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
.productView {
  display: grid;
  /* grid-template-rows:1fr 1fr; */
  gap: .8rem;
  padding: 1%;
}
.pro_details{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  /* border: 1px solid #131212; */
  padding: 1%;
}
.pro_details h5{
  /* padding-bottom: 2% ; */
}
.pro_details #brandh5{
  color: #494747;
  font-weight: 300;

}
.pro_details #brandh5 strong{
  font-size: larger;
}
.pro_details h2{
  line-height: 1.2;
  padding: 2% 0%;

}
.amount{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.amount div{
  display: flex;
  gap: 2rem;
}
.amount div button{
  height: 30px;
  width: 30px;
  background-color: #ffdb58;
  color: #131212;
  border: none;
  font-weight: 700;
}
.amount h5{
  font-weight: 400;
  text-align: start;
  padding: 0;
    margin: 0;

}
.amount h5 strong{
  color: green;
}
.pro_details p{
  padding: 0;
  margin: 0;
  line-height: 1.5;
  
}
.imageOpt {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.imageOpt img {
  width: 100px;
  height: 100px;
  margin: 10px;
}
img {
  width: 400px;
}
.price {
  color: rgb(5, 5, 37);
  font-size: 1.2rem;
  font-weight: bold;
}
.btn_div {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  /* justify-content: center; */
}
.btn_div button {
  border: none;
  background-color: #ffdb58;
  color: #131212;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  width: 6em;
  height: 3.5em;
  /* width: 100px;
  height: 50px; */
  /* padding: 2% 3%; */
  /* text-align: center; */
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
  /* margin: 4px 2px; */
}
.btn_div button:hover{
  background-color: #6b76d4;
  color: #ffdb58;
}
.pro_details h4{
  text-align: center;
}

@media (min-width: 961px){
  .productView{
  height: 100vh;
    display: grid;
    grid-template-columns: 40% 60%;
    padding:2% ;
  }
  .pro_details{
    align-items: flex-start;
    gap: .5em;
    padding: 1%;
  }
  .amount{
  display: flex;
  gap: 2rem;
}
  .amount div span{
    margin-top: 5%;
  }
  .amount h5{
    font-size: .9em;
    padding: 0;
    margin: 0;
  }
  .btn_div button{
    width: 100px;
  height: 50px;
  }

}
</style>
