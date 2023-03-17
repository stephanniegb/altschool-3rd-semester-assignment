<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div className="carousel">
    <img :src="props.images[activeIndex]" alt="animal"  id="main_img" />
    <div className="carousel-smaller">
      <div class="img_col" v-for="(image, index) in props.images"
      :key="index">
      <img @click="handleIndexClick"  :src="image" alt="product image" :data-index="index" style="width: 100%;" class="small_img"/>
    </div> 
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps} from "vue";
const activeIndex = ref(0);
const props = defineProps({
  images: {
    type: Array,
    //eslint-disable-next-line
    default:["http://pets-images.dev-apis.com/pets/none.jpg"]
  },
});
const handleIndexClick = (event) => {
  activeIndex.value = +event.target.dataset.index;
  // this.setState({
  //   active: +event.target.dataset.index
  // });
  console.log(event);
};
</script>

<style lang="scss" scoped></style>
