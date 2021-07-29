<template>
   <TheNavbar />
   <router-view></router-view>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'


export default {
   components: {
      TheNavbar
   },
   computed: {
      isAuthenticatedUser() {
         return this.$store.getters.isAuthenticatedUser
      }
   },
   async created() {
      await this.$store.dispatch('checkAuth')
    
      window.isAuthenticatedUser = this.isAuthenticatedUser
      
      if(!this.isAuthenticatedUser) {
            this.$router.replace({name: 'login'})
         }
      }
}

</script>