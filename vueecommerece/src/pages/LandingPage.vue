<template>
    <div className='loader_wrapper' v-if="loading">
        <div class="loader"></div>
    </div> 
    <section v-if="!loading">
        <h2>Explore our categories</h2>
        <div class="categories_wrapper">
            <div v-for="category in categories" :key="category" class="category">
            <h3>{{ category }} > </h3> 
        </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([])
const loading = ref(false)

const fetchCategories = async () => {
    loading.value = true
    const endPoint = 'https://dummyjson.com/products/categories'
    const response = await fetch(endPoint)
    const data = await response.json()
    categories.value = data
    loading.value = false
}
onMounted(() => {
    fetchCategories()
})
</script>

<style scoped>
.categories_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.category{
    padding: 2%;
    border: 3px solid rgb(107, 118, 212);
    width: 70%;
}
h2{
    padding: 2%;
}
</style>