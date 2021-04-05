<template>
<div>
  <div class="container">
   <div class="d-flex">
    <p>{{item.product.name}} x {{item.quantity}}</p>
   </div>
  </div>


</div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>