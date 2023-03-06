<template>
    <div>
        
        {{ newUser }}
        <form @submit.prevent="addUser">
            <label for="name">
                <input type="text" name="name" id="name" placeholder="Name" v-model="newUser.name">
            </label> <br>
            
            <label for="email">
                <input type="email" name="email" id="email" placeholder="Email" v-model="newUser.email">
            </label> <br>
            <label for="password">
                <input type="password" name="password" id="password" v-model="newUser.password">
            </label>
            
            <div><p>Already have an account?</p> <router-link to="/login">Log in</router-link></div>
            <input type="submit" value="Sign Up">
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useStore, mapActions} from 'vuex'
const store = useStore()
const newUser = ref({})
mapActions(['addUser'])
const addUser = () => {
    store.commit('registerUser', newUser.value)
}
onMounted(() => {
    newUser.value = store.getters.getnewUser

})
// const test = Array.from(document.querySelectorAll('*')).find(e => e.__vue_app__).__vue_app__.config.globalProperties.$store.state
// console.log(test);
</script>

<style lang="scss" scoped>

</style>