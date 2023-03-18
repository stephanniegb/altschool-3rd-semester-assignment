<template>
  <main>
    <div class="hero_wrap hero_1">
      <section class="headings1">
        <h4>Trade-in-offer</h4>
        <h1>Amazing deals!</h1>
        <h2>On all products!</h2>
        <p>save more with coupons and up to 20% off</p>
        <router-link to="/products" class="btn">Shop Now!</router-link>
      </section>
      <section id="hero">
        <img
          src="../../assets/pexels-sora-shimazaki-5935744(4).jpg"
          alt="hero image"
        />
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

    <div class="hero_wrap2">
      <section id="hero2">
        <img
          src="../../assets/pexels-kindel-media-6868619.jpg"
          alt=""
          class="hero_img"
        />
      </section>

      <div class="headings categories" v-if="loading">
        <div class="loader"></div>
      </div>

      <section v-else-if="!loading" class="headings categories">
        <h2>Explore our categories...</h2>
        <div class="categories_wrapper">
          <button
            v-for="category in categories"
            :key="category"
            @click="$router.push('/products')"
            class="category"
          >
            {{ category }}
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>
        </div>
      </section>
    </div>
    <div class="banner" style="height: 200px"></div>
    <div class="headings categories" v-if="loading">
      <div class="loader"></div>
    </div>
    <div class="top_deals" v-else-if="!loading">
      <h2>Top deals</h2>
      <div class="product-container">
        <div
          v-for="product in products"
          :key="product.id"
          class="product"
          @click="$router.push(`/products`)"
        >
          <figure>
            <div class="img_div">
              <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div>
              <figcaption>
                <span>{{ product.brand }}</span>
                <h4>{{ product.title }}</h4>
                <div class="star">
                  <font-awesome-icon
                    icon="fa-solid fa-star"
                    v-for="i in Math.floor(product.rating)"
                    :key="i"
                  />
                </div>
                <div class="price_div">
                  <h5>${{ product.price }}</h5>
                  <button
                    @click="$router.push(`/products/${product.id}`)"
                    class="view_button"
                  >
                    Shop
                    <font-awesome-icon icon="fa-solid fa-shopping-cart" />
                  </button>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
    <div class="hero_wrap">
      <section class="headings" id="hero_3">
        <h2>Explore our best offers...</h2>
        <p>save more with coupons and up to 20% off</p>
        <router-link to="/products" class="btn">Shop Now!</router-link>
      </section>
      <section class="hero3">
        <img
          src="../../assets/pexels-borko-manigoda-1778412.jpg"
          alt=""
          class="hero_img"
        />
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
const categories = ref([]);
const products = ref([]);
const loading = ref(false);
const fetchCategories = async () => {
  loading.value = true;
  const endPoint = "https://dummyjson.com/products/categories";
  const endPoint2 = "https://dummyjson.com/products/category/smartphones";
  const response = await fetch(endPoint);
  const res = await fetch(endPoint2);
  const data = await response.json();
  const resData = await res.json();
  categories.value = data;
  products.value = resData.products.slice(1, 6);
  loading.value = false;
};
onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
}
.headings1 {
  height: 65vh;
  text-align: start;
}
.headings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
}
.hero_wrap {
  display: flex;
  flex-direction: column;
  padding: 2%;
}

#hero_3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.features_div h2 {
  font-weight: 800;
}
.features_wrapper h2 {
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
.feature p {
  font-size: 0.8em;
}

.headings1 h1 {
  color: #6b76d4;
  font-family: "Fugaz One", cursive;
}
.headings1 h1 {
  color: #6b76d4;
  font-family: "Fugaz One", cursive;
}
.headings1 p {
  font-size: 0.7em;
}
.headings p {
  color: rgb(121, 117, 117);
}
.headings1 .btn {
  padding: 2%;
  background-color: #ffdb58;
  color: #131212;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: "Fugaz One", cursive;
  margin-bottom: 2%;
}
.headings .btn {
  padding: 2%;
  background-color: #ffdb58;
  color: #131212;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: "Fugaz One", cursive;
  margin-bottom: 2%;
}
.headings .btn:hover {
  background-color: #6b76d4;
  color: #ffdb58;
}
.headings1 .btn:hover {
  background-color: #6b76d4;
  color: #ffdb58;
}
.categories_wrapper {
  display: grid;
  flex-basis: 50%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.category {
  padding: 3%;
  border: 2px solid #131212;
  font-family: "Tilt Warp", cursive;
  background-color: transparent;
  font-size: 0.7em;
}
.category:hover {
  background-color: #ffdb58;
  box-shadow: 10px 10px 0px #d0d0d0;
  cursor: pointer;
  color: #6b76d4;
}
@media (min-width: 641px) {
  .headings1 {
    height: 55vh;
  }
  .headings1 h1 {
    font-size: 1.8em;
  }
  .headings1 p {
    font-size: 1.3em;
  }
}
@media (min-width: 961px) {
  .hero_1 img {
    display: block;
  }

  .hero_1 {
    display: flex;
    background-image: none;
    flex-direction: row;
    justify-content: space-between;
  }
  .hero_wrap {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 2%;
  }
  .hero_wrap2 {
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 1rem;
    margin-bottom: 1%;
  }
  .headings {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
  }
  .headings1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
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
  #hero2 img {
    border-end-end-radius: 40%;
    border-top-left-radius: 40%;
  }
  .features_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .feature p {
    font-size: 1em;
  }

  .headings {
    justify-content: center;
    align-items: center;
  }
  .headings1 h1 {
    font-size: 4em;
  }
  .categories_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
  .category {
    border: 2px solid #131212;
    font-family: "Tilt Warp", cursive;
    background-color: transparent;
    font-size: 0.9em;
    flex-basis: 10%;
    width: 150px;
    height: 35px;
  }
}
</style>
