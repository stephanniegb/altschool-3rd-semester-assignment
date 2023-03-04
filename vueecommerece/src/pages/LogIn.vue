<template>
    <div>
        <form>
            <label>
                <input type="email" name="email" id="email" placeholder="username or email">
            </label> <br>
            
            <label for="password">
                <input type="password" name="password" id="password" placeholder="Password">
            </label>
            
            <div><p>Don't have an account?</p> <router-link to="/signup">Sign up</router-link></div>
            
            <button type="submit">Log in</button>
        </form>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>