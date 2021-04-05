<template>
<div class="products row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  <Product v-for="product in products" :key="product._id" :product="product"/>
</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Product from '../components/products/Product.vue'
export default {
  name: 'Products',
  components: {
    Product
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>

</style>