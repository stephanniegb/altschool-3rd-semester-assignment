<template>
    <div className='loader_wrapper' v-if="loading">
        <div class="loader"></div>
    </div> 
    <main>
        <div class="hero_wrap">
        <section class="headings">
            <h4>Trade-in-offer</h4>
            <h1>Superb! deals</h1>
            <h2>On all products!</h2>
            <p>save more with coupons and up to 20% off</p>
            <router-link to="/products" class="btn">Shop Now!</router-link>
        </section>
        <section id="hero">
            <img src="https://free-vectors.net/_ph/10/2/718462586.jpg" alt="hero_img">
        </section>
    </div>
    <div class="hero_wrap">
        <section id="hero2">
            <img src="https://free-vectors.net/_ph/1/2/696495084.jpg" alt="hero_img">
        </section>
        <section class="headings categories">
            <h2>Explore our categories...</h2>
            <div class="categories_wrapper">
                <button v-for="category in categories" :key="category" class="category">
                    {{ category }} <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </button>
            </div>
        </section>
    </div>
    <div class="hero_wrap">
        <section class="headings">
            <h4>Trade-in-offer</h4>
            <h1>Superb! deals</h1>
            <h2>On all products!</h2>
            <p>save more with coupons and up to 20% off</p>
            <router-link to="/products" class="btn">Shop Now!</router-link>
        </section>
        <section id="hero">
            <img src="https://free-vectors.net/_ph/1/2/319736785.jpg" alt="hero_img">
        </section>
    </div>
    </main>
    
    <!-- <section v-if="!loading">
        <h2>Explore our categories</h2>
        <div class="categories_wrapper">
            <div v-for="category in categories" :key="category" class="category">
            <h3>{{ category }} > </h3> 
        </div>
        </div>
    </section> -->
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
.hero_wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
}

#hero{
    flex-basis: 50%;
}
#hero img{
    border-end-end-radius: 40%;
    border-top-left-radius: 40%;
}
#hero2{
    flex-basis: 50%;
}
.headings{
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .7rem;
}
.headings h1{
    color: #6b76d4;
    font-size: 4em;
    font-family: 'Fugaz One', cursive;
}
.headings p{
    color: rgb(121, 117, 117);
}
.headings .btn{
    padding: 3%;
    background-color: #ffdb58;
    color: #131212;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-family: 'Fugaz One', cursive;;
}

.categories_wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

}
.category{
    padding: 2%;
    border: 2px solid #131212;
    font-family: 'Tilt Warp', cursive;
    background-color: transparent;
    font-size: .9em;
    width: 150px;
    height: 50px;
}
.category:hover{
    background-color: #ffdb58;

    cursor: pointer;
}
h2{
    padding: 2%;
}
.categories h2{
    color: #D9042B;
    font-size: 2em;
}
</style>