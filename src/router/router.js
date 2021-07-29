import { createRouter, createWebHistory } from 'vue-router'
import UserDashboard from '../views/UserDashboard.vue'
import UserLogin from '../views/UserLogin.vue'


const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         meta: {
            needAuth: true
         },
         name: 'dashboard',
         path: '/',
         component: UserDashboard
      },
      {
         name: 'login',
         path: '/login',
         component: UserLogin,
      }
   ]
})

router.beforeEach((to, from, next) => {
   if(to.meta.needAuth && !window.isAuthenticatedUser) {
      next({ name: 'login' })
   } else {
      next(true)
   }
})

export default router