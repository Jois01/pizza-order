<script setup>
import navbar from './components/navbar.vue'
import pizza from './components/pizza.vue'
import cart from './components/cart.vue'
</script>

<template>
  <navbar/>
  <div class="container grid grid-cols-1 md:grid-cols-3">
    <div class="card col-span-2">
      <pizza/>
    </div>
    <div class="card">
      <cart/>
    </div>
  </div>
</template>

