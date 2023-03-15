<template>
  <div className="loader_wrapper" v-if="loading">
    <div class="loader"></div>
  </div>
  <main class="container">
    welcome - {{ userDetails.name }}
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
figure{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
figure div {
  /* margin-bottom: 1rem; */
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
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2%;
}
.img_div {
  height: 200px;
  padding: 1%;
}
img {
  max-height: 100%;
  border-radius: 5px;
  object-fit: cover;
}
h3 {
  display: inline;
}
.star{
  color: #ffdb58;
  font-size: .7em;
}
.price_div {
  display: flex;
  justify-content: space-between;
}
.price_div h5{
  font-size: 1.2em;
}
</style>
