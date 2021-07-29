<template>
   <h1>User Dashboard</h1>
   <button @click="userLogout">Logout</button>
</template>

<script>

export default {
   methods: {
      async userLogout() {
         try {
            await this.$store.dispatch('logout')
            this.$router.replace({ name: 'login' })
         } catch(err) {
            console.log(err)
         }

      }
   },
   computed: {
      isAuthenticatedUser() {
         return this.$store.getters.isAuthenticatedUser
      }
   },
   created() {
      if(!this.isAuthenticatedUser) {
         this.$router.replace({name: 'login'})
      }
   }
}

</script>