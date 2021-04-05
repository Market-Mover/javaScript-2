<template>
<div class="container">
  <div class="card details">
    <h1>Product details</h1>
    <p>{{ product.name }}</p>
    <p>{{ product.short }}</p>
    <p>{{ product.desc }}</p>
    <p>${{ product.price }}</p>
    <img :src="product.image" alt="" class="image-width">
    </div>
    <button class="btn m-3 bg-info hover-shadow" @click="addItemToCart({product, quantity})">Add to Cart</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    ...mapGetters(['product']),
  },
  methods: {
    ...mapActions(['getProduct', 'addItemToCart']),
  },
  mounted() {
    this.getProduct(this.$route.params.id)
  },
};
</script>

<style scoped>
.image-width {
  max-width: 500px;
  margin: auto;

}
.btn {
  width: 150px;
  background-color: green;
  color: white;
}
.container {
  min-height: 800px;
}
</style>
