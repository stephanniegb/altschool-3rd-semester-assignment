<template>
    <div>
        <form @submit.prevent="loginUser">
            <label>
                <input type="email" name="email" id="email" placeholder="username or email" v-model="userDetails.email">
            </label> <br>
            
            <label for="password">
                <input type="password" name="password" id="password" placeholder="Password" v-model="userDetails.password">
            </label>
            
            <div><p>Don't have an account?</p> <router-link to="/signup">Sign up</router-link></div>
            
            <input type="submit" value="Login">
        </form>

    </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import {useStore, mapActions} from 'vuex'
const store = useStore()

const userDetails = ref({})
mapActions(['loginUser'])
const loginUser = () => {
    store.commit('loginUser', userDetails.value)
}
// const currentUser = computed(() => {
//    if(userDetails.value) {
//        return userDetails.value
//    }
// })

onMounted(() => {
    userDetails.value = store.getters.getUserDetails
})

const test = Array.from(document.querySelectorAll('*')).find(e => e.__vue_app__).__vue_app__.config.globalProperties.$store.state
console.log(test);
</script>

<style lang="scss" scoped>

</style>