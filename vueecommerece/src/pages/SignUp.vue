<template>
    <div>
        
        {{ allUsers }}
        <form @submit.prevent="addUser">
            <label for="name">
                <input type="text" name="name" id="name" placeholder="Fullname">
            </label> <br>
            
            <label for="email">
                <input type="email" name="email" id="email" placeholder="Email" v-model="allUsers.email">
            </label> <br>
            
            <!-- <label for="name">
                <input type="text" name="name" id="name" placeholder="Choose a username..." v-model="userDetails.username">
            </label> <br> -->
            
            <label for="password">
                <input type="password" name="password" id="password" v-model="allUsers.password">
            </label>
            
            <div><p>Already have an account?</p> <router-link to="/login">Log in</router-link></div>
            <!-- <button @click="addUser" >Sign up</button> -->
            <input type="submit" value="Sign Up">
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useStore, mapActions} from 'vuex'
const store = useStore()
// const userDetails = ref({
//     email: '',
//     username: '',
//     password: ''
// })
const allUsers = ref({})
mapActions(['addUser'])
const addUser = () => {
    store.commit('registerUser', allUsers.value)
}
onMounted(() => {
    // userDetails.value.email = store.getters.getCurrentuser.email
    // userDetails.value.password = store.getters.getCurrentuser.password
    allUsers.value = store.getters.getAllUsers

})
const test = Array.from(document.querySelectorAll('*')).find(e => e.__vue_app__).__vue_app__.config.globalProperties.$store.state
console.log(test);
</script>

<style lang="scss" scoped>

</style>