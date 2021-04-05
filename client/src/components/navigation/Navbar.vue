<template>
  
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <i class="fas fa-ankh mx-1"></i>villha.nu 
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item hover-shadow rounded">
          <router-link class="nav-link" to="/">Hem</router-link>
        </li>

        <li class="nav-item hover-shadow rounded">
          <router-link class="nav-link" to="/products">Produkter</router-link>
        </li>

        <li class="nav-item hover-shadow rounded">
          <router-link class="nav-link" to="/about">Om oss</router-link>
        </li>

          <div class="input mt-2">
            <input type="text" class="m-auto px-5 rounded shadow"> <button class="bg-warning rounded shadow btn"><i class="fas fa-search"></i></button>
          </div>
          
      </ul>
     

      <ul class="navbar-nav">
        
        <li class="nav-item dropdown me-4">
          <a
            class="nav-link dropdown"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart"></i>
            <span v-show="cartCount" class="badge rounded-pill badge-notification bg-danger">{{cartCount}}</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
              <Cart />
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fab fa-accessible-icon"></i>
          </a>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
      <div class="p-2 d-flex justify-content-between align-items-center user-settings">
      <div class="ms-2">
        <div class="total-price">
        <span class="ms-1">{{firstName}}</span>
        </div>
      </div>

      <router-link to="/orders" class="btn btn-info">Aktiva ordrar</router-link>
    </div>
      </ul>
        </li>
        <li class="nav-item shadow rounded" v-if="!loggedIn">
          <router-link class="nav-link" to="/login">Logga in</router-link>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <a  href="#" class="nav-link pb-0" @click="logout">Logga ut</a>
        </li>
      </ul>
    </div>
   
  </div>
 
</nav>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Cart from '../cart/Cart.vue'
export default {
  name: 'Navbar',
  components: {
    Cart
  },
  computed: {
    ...mapGetters(['cartCount', 'loggedIn', 'firstName'])

  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>

.fa-shopping-cart {
  color: rgb(45, 5, 141);
  font-size: 1.5rem;
}
.badge {
  font-size: 1rem
}
.shopping-cart {
  min-width: 453px;
}
.user-settings {
  min-width: 400px;
}
.input {
  position: relative;
  left: 150px;
}
.btn {
  height: 32px;
}
</style>