import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Details from '../views/Details.vue'
import fourofour from '../views/404.vue'
import Kassa from '../views/Kassa.vue'
import Orders from '../views/Orders.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    props: true
  },
  {
    path: '/kassa',
    name: 'Kassa',
    component: Kassa,
    meta: { authorize: true }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { authorize: true }
  },
  {
    path: '/products/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '*',
    name: '404',
    component: fourofour
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const token = sessionStorage.getItem('token')
  // const email = sessionStorage.getItem('storedEmail')

  if(authorize) {

    if(!token) {
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      next()
    }

  }
  next()
})

export default router
