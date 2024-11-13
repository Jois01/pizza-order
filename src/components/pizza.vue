<template>
  <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
    <div class="card-title m-4 text-xl">Pizza list</div>
    <div class="card-body m-4 items-center">
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 items-center">
        <div class="card" v-for="pizza in pizzas" :key="pizza.id">
          <img :src="pizza.image" alt="Pizza Image" class="rounded-md" />
          <div class="content">
            <h2 class="pizza_name text-lg">{{ pizza.name }}</h2>
            <p class="pizza_description text-sm">{{ pizza.harga }}</p>
            <button @click="open = true" class="bg-gray-200 w-32 py-1 px-2 mt-2 rounded-md">
              {{ pizza.description }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="open"
    class="modal bg-white border border-gray-400 rounded-md p-5 items-center justify-center inset-0 fixed m-20 md:m-40 shadow-2xl "
  >
    <div class="judul m-3 flex justify-between">
      <div class="text-2xl">Select variant</div>
      <button @click="open = false" class="bg-gray-200 w-32 py-1 px-2 rounded-md">Close</button>
    </div>
    <hr />
    <div class="content">
      <div class="grid grid-cols-2 m-6 gap-8  md:grid-cols-4">
        <div class="variant" v-for="variant in variants" :key="variant.id">
          <input type="checkbox" />
          <label class="text-lg ml-2">{{ variant.name }}</label>
        </div>
      
      </div>
      <hr />
      <div class="footer m-3 flex justify-between">
        <p></p>
        <button class="bg-blue-500 text-white w-32 py-1 px-2 rounded-md">add To cart</button>
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
          harga: 'Rp 100.000',
          image: 'pizza.jpeg',
          description: 'bisa di custom',
        },
        {
          id: 2,
          name: 'Pizza 2',
          harga: 'Rp 50.000',
          image: 'pizza1.jpeg',
          description: 'bisa di custom',
        },
        {
          id: 3,
          name: 'Pizza 3',
          harga: 'Rp 25.000',
          image: 'pizza2.jpeg',
          description: 'bisa di custom',
        },
      ],
      variants: [
        {
          id: 1,
          name: 'variant 1',
        },
        {
          id: 2,
          name: 'variant 2',
        },
        {
          id: 3,
          name: 'variant 3',
        },
        {
          id: 4,
          name: 'variant 4',
        },
        {
          id: 5,
          name: 'variant 5',
        },
        {
          id: 6,
          name: 'variant 6',
        },
        {
          id: 7,
          name: 'variant 7',
        },
        {
          id: 8,
          name: 'variant 8',
        },
        {
          id: 9,
          name: 'variant 9',
        },
        {
          id: 10,
          name: 'variant 10',
        },
        {
          id: 11,
          name: 'variant 11',
        },
        {
          id: 12,
          name: 'variant 12',
        },
      ],
      open: false,
    }
  },
}
</script>
