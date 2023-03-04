<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
        <li><router-link to="/login">Log In</router-link></li>
      </ul>
    </nav>
  </header>
  <RouterView />
  <footer> contact us</footer>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

</style>
