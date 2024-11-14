<template>
  <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
    <div class="card-title m-4 text-xl">Pizza list</div>
    <div class="card-body m-4 items-center">
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 items-center">
        <div
          class="card bg-gray-50 rounded-lg"
          v-for="pizza in pizzas"
          :key="pizza.id"
          @click="open = true"
        >
          <img :src="pizza.image" alt="Pizza Image" class="rounded-t-lg" />
          <div class="content mt-3 m-2">
            <h2 class="pizza_name text-lg">{{ pizza.name }}</h2>
            <p class="pizza_description text-sm">Rp. {{ pizza.harga }}</p>
            <div class="bg-gray-200 w-40 py-1 px-2 mt-2 rounded-md flex gap-2">
              <img src="./icons/pizza-svgrepo-com.svg" alt="" class="size-6" />
              {{ pizza.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <div
    v-if="open"
    class="modal bg-white border border-gray-400 rounded-md items-center justify-center inset-0 fixed m-20 md:m-40 shadow-2xl"
  >
    <div class="judul m-3 flex justify-between mt-10">
      <div class="text-2xl">Select variant</div>
      <button @click="open = false" class="bg-gray-200 w-32 py-1 px-2 rounded-md">Close</button>
    </div>
    <hr />
    <div class="content">
      <form action="#">
        <div class="grid grid-cols-2 m-6 gap-8 md:grid-cols-4">
          <div class="topping" v-for="topping in toppings" :key="topping.id">
            <input type="checkbox" :id="topping.id" class="hidden" v-model="topping.isChecked" />
            <label :for="topping.id" class="inline-flex items-center justify-between">
              <div
                class="bg-white border-2 border-gray-200 rounded-lg cursor-pointer"
                :class="{ 'border-blue-500': topping.isChecked }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 stroke-white fill-yellow-500"
                  :class="{ 'rotate-45': topping.isChecked }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div class="ml-2">
                {{ topping.name }}
              </div>
            </label>
          </div>
        </div>
      </form>
      <hr class="mt-6" />
      <div class="footer m-3 mt-6 flex justify-between">
        <p></p>
        <button
          class="bg-blue-500 text-white w-32 py-2 px-2 rounded-md flex gap-2transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          @click.prevent="addToCart, (open = false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<!-- varian yang bisa di pilih cuman 5 -->
<!-- ambil data pizza dan variant -->
<!-- kirim data ke cart -->

<script>
import pizzas from '../store/pizzas.json'
export default {
  data() {
    return {
      pizzas,

      cart: [],
      total: 0,
      toppings: [
        {
          id: 1,
          name: 'Topping 1',
        },
        {
          id: 2,
          name: 'Topping 2',
        },
        {
          id: 3,
          name: 'Topping 3',
        },
        {
          id: 4,
          name: 'Topping 4',
        },
        {
          id: 5,
          name: 'Topping 5',
        },
      ],
      open: false,
      selectedToppings: false,
    }
  },
  methods: {
    toppingToggle(topping) {
      this.isChecked = !this.isChecked
    },
    addToCart() {
      this.cart.push(this.pizzas[0])
      this.total += this.pizzas[0].harga
      if (this.cart == this.pizzas.id) {
        this.pizzas.push({
          pizza: this.cart,
        })
      }
    },
  },
}
</script>
