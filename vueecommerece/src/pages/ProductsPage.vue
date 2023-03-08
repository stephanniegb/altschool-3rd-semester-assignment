<template>
  <main class="container">
    welcome - {{ userDetails.name }}
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product">
        <figure>
          <div>
            <img :src="product.thumbnail" :alt="product.title" />
          </div>
          <div>
            <figcaption>
              <h3>{{ product.title }}</h3> - ${{ product.price }}
            </figcaption>
            <!-- <figcaption>{{ product.description }}</figcaption>
            <figcaption></figcaption> -->
            <button class='view_button'>View</button>
          </div>
        </figure>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import useExtractUser from '../composables/useExtractUser'

const products = ref([]);
const loading = ref(false);
const userDetails = JSON.parse(localStorage.getItem("user"));
console.log(userDetails);
const fetchProducts = async () => {
  loading.value = true;
  const endPoint = "https://dummyjson.com/products";
  const response = await fetch(endPoint);
  const data = await response.json();
  products.value = data.products;
  loading.value = false;
};
onMounted(() => {
  fetchProducts();
});
// console.log(useExtractUser);
// const {user} = useExtractUser(userDetails)
</script>

<style scoped>
.view_button{
  background-color: #0076C8;
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
.container{
    padding: 1%;
}
.product{
  
  background-color: #ffffff;
  padding: 3%;
  border-radius: 5px;
}
figure div{
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
h3{
    display: inline;
}
</style>
