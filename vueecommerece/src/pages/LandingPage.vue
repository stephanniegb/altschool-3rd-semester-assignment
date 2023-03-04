<template>
    <h2 v-if='loading'>loading....</h2>
    <section>
        <h2>Explore our categories</h2>
        <div v-for="category in categories" :key="category">
            <h3>{{ category }} > </h3> 
        </div>
    </section>
    
    

</template>

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([])
const loading = ref(false)

const fetchProducts = async () => {
    loading.value = true
    const endPoint = 'https://dummyjson.com/products/categories'
    const response = await fetch(endPoint)
    const data = await response.json()
    categories.value = data
    loading.value = false
}
onMounted(() => {
    fetchProducts()
})

</script>

<style lang="scss" scoped>

</style>