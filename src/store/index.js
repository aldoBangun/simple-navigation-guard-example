import { createStore } from 'vuex'


const store = createStore({
   state() {
      return {
         isAuthenticatedUser: false
      }
   },
   getters: {
      isAuthenticatedUser(state) {
         return state.isAuthenticatedUser
      }
   },
   mutations: {
      AUTH_USER(state, payload) {
         state.isAuthenticatedUser = payload
      }
   },
   actions: {
      async login(context) {
         await localStorage.setItem('token', 'tokenhash')
         context.commit('AUTH_USER', true)
      },
      async logout(context) {
         await localStorage.removeItem('token')
         context.commit('AUTH_USER', false) 
      },
      async checkAuth(context) {
         const token = await localStorage.getItem('token')
         if(token) {
            context.dispatch('login')
         }
      }
   }
})

export default store