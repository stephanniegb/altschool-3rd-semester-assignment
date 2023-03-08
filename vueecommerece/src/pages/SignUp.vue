<template>
  <main>
    <div class="container">
        <h1>Sign up</h1>
      <form @submit.prevent="addUser">
        <div class="text-field">
          <label for="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              v-model="newUser.name"
              class="text_input"
              required
            />
          </label>
        </div>

        <div class="text-field">
          <label for="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              v-model="newUser.email"
              class="text_input"
              required
            />
          </label>
          <br />
        </div>
        <div class="text-field">
          <label for="password">
            <input
              type="password"
              name="password"
              id="password"
              v-model="newUser.password"
              class="text_input"
              placeholder="Password"
              required
            />
          </label>
        </div>

        <div>
          <p>
            Already have an account?
            <span><router-link to="/login">Log in</router-link></span>
          </p>
        </div>
        <input type="submit" value="Sign Up" class="log_btn" />
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore, mapActions } from "vuex";
const store = useStore();
const newUser = ref({});
mapActions(["addUser"]);
const addUser = () => {
  store.commit("registerUser", newUser.value);
};
onMounted(() => {
  newUser.value = store.getters.getnewUser;
});
// const test = Array.from(document.querySelectorAll('*')).find(e => e.__vue_app__).__vue_app__.config.globalProperties.$store.state
// console.log(test);
</script>

<style scoped>
main {
  display: flex;
  background-color: rgb(17, 2, 2);
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.container {
  width: 50%;
  background-color: white;
  border-radius: 5px;
}
h1 {
  text-align: center;
  padding: 2%;
  border-bottom: 1px solid silver;
  margin-bottom: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
.text-field {
  border-bottom: 1px solid silver;
  width: 50%;
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
  width: 10%;
  margin-bottom: 1rem;
  padding: 1%;
  font-size: 1rem;
  background-color: rgb(56, 20, 155);
  border-radius: 5px;
  border: none;
  color: white;
}
</style>
