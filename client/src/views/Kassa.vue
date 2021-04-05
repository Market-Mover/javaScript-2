<template>
  <div class="kassa">
    <div v-for="item in cart" :key="item.product._id">
      <div class="card">
  <img
    :src="item.product.image"
    class="card-img-top size"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">{{item.product.name}}</h5>
    <p class="card-text">{{item.product.short}}</p>
    <p class="card-text">
      {{item.quantity}}
    </p>
    <a href="#!" class="btn btn-danger" @click="deleteItem">Ta bort</a>
  </div>
</div>
    </div>
    <button to="/orders" class="btn bg-info" @click="handleSave">Betala</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['handleSave', 'deleteItem'])
  }
}
</script>

<style scoped>
.cart {
  min-height: 60vh
}
.kassa {
  min-height: 800px;
}
img{
  max-width: 200px;
  margin: auto;
}
</style>