<template>
    <div>
        <form>
            <label for="name">
                <input type="text" name="name" id="name" placeholder="Fullname">
            </label> <br>
            
            <label for="email">
                <input type="email" name="email" id="email" placeholder="Email">
            </label> <br>
            
            <label for="name">
                <input type="text" name="name" id="name" placeholder="Choose a username...">
            </label> <br>
            
            <label for="password">
                <input type="password" name="password" id="password">
            </label>
            
            <div><p>Already have an account?</p> <router-link to="/login">Log in</router-link></div>
            
            <button type="submit">Sign up</button>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>