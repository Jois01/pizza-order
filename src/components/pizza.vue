<template>
  <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
    <div class="card-title m-4 text-xl">Pizza list</div>
    <div class="card-body m-4 items-center">
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center">
        <div class="card" v-for="pizza in pizzas" :key="pizza.id">
          <img :src="pizza.image" alt="Pizza Image" class="rounded-md"/>
          <div class="content">
            <h2 class="pizza_name text-lg">{{ pizza.name }}</h2>
            <p class="pizza_description text-sm">{{ pizza.description }}</p>
            <p class="bg-gray-200 w-32 py-1 px-2 mt-2 rounded-md">Bisa di custom</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pizzas: [
        {
          id: 1,
          name: 'Pizza 1',
          description: 'Rp 100.000',
          image: 'pizza.jpeg',
        },
        {
          id: 2,
          name: 'Pizza 2',
          description: 'Rp 50.000',
          image: 'pizza1.jpeg',
        },
        {
          id: 3,
          name: 'Pizza 3',
          description: 'Rp 25.000',
          image: 'pizza2.jpeg',
        },
      ],
    }
  },
}
</script>
