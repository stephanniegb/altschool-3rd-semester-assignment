<template>
    
    <div>
        <!-- {{ products }} -->
        

    </div>
    <div v-for="product in products" :key="product.id">
        <h3>{{ product.title}}</h3>
        <figure>
            <div>
                <img :src="product.thumbnail" :alt="product.title">
            </div>
            <div>
                <figcaption>{{ product.title }}</figcaption>
                <!-- <figcaption>{{ product.description }}</figcaption> -->
                <figcaption>${{ product.price }}</figcaption>
                <button>View</button>
            </div>
        </figure>
        
    </div>
    <figure>
        
    </figure>
    
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([])
const loading = ref(false)
const fetchProducts = async () => {
    loading.value = true
    const endPoint = 'https://dummyjson.com/products'
    const response = await fetch(endPoint)
    const data = await response.json()
    products.value = data.products
    loading.value = false
}
onMounted(() => {
    fetchProducts()
})


</script>

<style lang="scss" scoped>

</style>