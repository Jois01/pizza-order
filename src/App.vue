<script setup>
import navbar from './components/navbar.vue'
import pizza from './components/pizza.vue'
import cart from './components/cart.vue'
</script>
<template>
  <navbar />
  <div class="grid grid-cols-1 md:grid-cols-3 m-4" >
    <div class="card col-span-2">
      <pizza />
    </div>
    <div class="card">
      <cart />
    </div>
  </div>
  <!-- <Variant v-if="open" /> -->
</template>
<script>
export default {
  components: {
    navbar,
    pizza,
    cart,
    // Variant,
  },
}
</script>
