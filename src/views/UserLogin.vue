<template>
   <h1>User Login</h1>
   <button @click="userLogin">Login</button>
</template>

<script>

export default {
   methods: {
      async userLogin() {
         try {
            await this.$store.dispatch('login')
            this.$router.replace({ name: 'dashboard' })
            window.isAuthenticatedUser = this.$store.getters.isAuthenticatedUser
         } catch(err) {
            console.log(err)
         }
      }
   }
}

</script>