<template>
  <main>
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
        <div class="text-field">
          <label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="text_input"
              v-model="userDetails.email"
              required
            />
          </label>
        </div>

        <div class="text-field">
          <label for="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="text_input"
              v-model="userDetails.password"
              required
            />
          </label>
        </div>

        <div>
          <p>Don't have an account? <span><router-link to="/signup">Sign up</router-link></span></p>
          
        </div>

        <input type="submit" value="Login" class="log_btn" />
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore, mapActions } from "vuex";
const store = useStore();

const userDetails = ref({});
mapActions(["loginUser"]);


const loginUser = () => {
  store.commit("loginUser", userDetails.value);
};
// const currentUser = computed(() => {
//    if(userDetails.value) {
//        return userDetails.value
//    }
// })

// onMounted(() => {
//     userDetails.value = store.getters.getUserDetails
// })

// const test = Array.from(document.querySelectorAll('*')).find(e => e.__vue_app__).__vue_app__.config.globalProperties.$store.state
// console.log(test);
</script>

<style scoped>
main {
  display: flex;
  /* background-color: rgb(17, 2, 2); */
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.container {
  width: 50%;
  border-radius: 5px;
  border: 2px solid #131212;
}
h1 {
  text-align: center;
  padding: 2%;
  border-bottom: 2px solid #131212;
  margin-bottom: 1.5rem;
}
form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;


}
.text-field{
    border-bottom: 2px solid #131212;
    width: 80%;
}
.text_input {
  width: 100%;
  border: none;
  padding: 2%;
  font-size: 1em;
  height: 3rem;
  background: none;
  outline: none;
  
}
.log_btn {
  padding: 3%;
  background-color: #ffdb58;
  color: #131212;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: "Fugaz One", cursive;
}
.log_btn:hover{
  background-color: #6b76d4;
  color: #ffdb58;
}
@media(min-width: 480px){
  .container{
    width: 70%;
  }
  .text-field{
    width: 70%;
  }
}
@media (min-width: 961px){
  .container{
    width: 50%;
  }
  .text-field{
    width: 55%;
  }
}
</style>
