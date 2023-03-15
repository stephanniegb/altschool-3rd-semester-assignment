<template>
  <div className="loader_wrapper" v-if="loading">
    <div class="loader"></div>
  </div>
  <main class="container">
    {{ productstest }}
    welcome - {{ userDetails.name }}
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product">
        <figure>
          <div>
            <img :src="product.thumbnail" :alt="product.title" />
          </div>
          <div>
            <figcaption>
              <span>{{product.brand}}</span>
              <h4>{{ product.title }}</h4>
              <div class="star" >
                <font-awesome-icon icon="fa-solid fa-star" v-for="i in Math.floor(product.rating)" :key="i"/>
              </div>
              <div><h5>${{ product.price }}</h5> <button @click="$router.push(`/products/${product.id}`)" class="view_button">View</button></div>
               
            </figcaption>
            
          </div>
        </figure>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore, mapActions } from "vuex";
const store = useStore();
// import useExtractUser from '../composables/useExtractUser'
const products = ref([]);
const loading = ref(false);
const userDetails = JSON.parse(localStorage.getItem("user"));

mapActions(["updateProducts"]);

const fetchProducts = async () => {
  loading.value = true;
  const endPoint = "https://dummyjson.com/products";
  const response = await fetch(endPoint);
  const data = await response.json();
  products.value = data.products;
  loading.value = false;
  store.commit("updateProducts", products.value);
};
onMounted(() => {
  fetchProducts();
});
// console.log(useExtractUser);
// const {user} = useExtractUser(userDetails)

const test = Array.from(document.querySelectorAll("*")).find(
  (e) => e.__vue_app__
).__vue_app__.config.globalProperties.$store.state;
console.log(test);
</script>

<style scoped>
.spinner {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.view_button {
  background-color: #0076c8;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 2% 3%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.container {
  padding: 1%;
}
.product {
  background-color: #ffffff;
  padding: 3%;
  border-radius: 5px;
}
figure div {
  margin-bottom: 1rem;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}
img {
  max-height: 200px;
}
h3 {
  display: inline;
}
</style>
