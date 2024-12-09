<template>
  <div>
    <div v-if="cart.length > 0">
      <div class="card m-4 gap-4" v-for="(item, index) in cart" :key="index">
        <div class="card-body flex justify-between">
          <div class="text-xl">{{ item.name }}</div>
          <img :src="item.image" alt="" class="w-32 rounded-md" />
        </div>
        <div class="topping mt-6">
          <div class="flex gap-2 items-center">
            <div class="text-sm">TOPPING</div>
            <button
              type="button"
              class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              @click="openModal(index)"
            >
              <img src="./icons/tambah.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
            </button>
          </div>
          <div class="topping-cart">
            <div
              class="topping-item flex justify-between items-center"
              v-for="(topping, tIndex) in item.toppings"
              :key="tIndex"
            >
              <div class="topping-name">{{ topping.name }}</div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  @click="buttonKurangTopping(index, tIndex)"
                >
                  <img
                    src="./icons/kurang.svg"
                    class="size-2 text-gray-900 dark:text-white"
                    alt=""
                  />
                </button>
                <div class="text-center m-2">{{ topping.quantity }}</div>
                <button
                  type="button"
                  class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  @click="buttonTambahTopping(index, tIndex)"
                >
                  <img
                    src="./icons/tambah.svg"
                    class="size-2 text-gray-900 dark:text-white"
                    alt=""
                  />
                </button>
              </div>
              <div class="topping-harga">Rp. {{ topping.price * topping.quantity }}</div>
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="flex items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              @click="buttonKurang(index)"
            >
              <img src="./icons/kurang.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
            </button>
            <div class="text-center m-2">
              {{ item.quantity }}
            </div>
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              @click="buttonTambah(index)"
            >
              <img src="./icons/tambah.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
            </button>
          </div>
          <div class="harga text-xl m-2">Rp {{ item.harga }}</div>
        </div>
        <div class="flex items-center justify-between">
          <button @click="removeFromCart(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 m-4 stroke-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <div class="total text-xl font-bold">Rp. {{ totalSatuan(item) }}</div>
        </div>
        <hr class="my-8" />
      </div>

      <div class="total flex justify-between m-4 font-bold items-center">
        <div class="text-xl">Total</div>
        <div class="harga text-2xl m-2">Rp {{ total }}</div>
      </div>
    </div>
    <div v-else>
      <div class="text-center text-xl text-gray-300 m-10">Keranjang kosong</div>
    </div>
  </div>
  <!-- modal -->
  <div
    v-if="open"
    class="modal bg-white border border-gray-400 rounded-md items-center justify-center inset-0 fixed md:m-40 shadow-2xl"
  >
    <div>
      <div class="judul m-3 flex justify-between mt-10">
        <div class="text-md sm:text-2xl">Select Toppings</div>
        <button @click="open = false" class="bg-gray-200 w-32 py-1 px-2 rounded-md">Close</button>
      </div>
      <hr />
      <form action="#">
        <div class="grid grid-cols m-6 gap-8 md:grid-cols-4 sm:grid-cols-2">
          <div class="topping" v-for="topping in toppings" :key="topping.id">
            <input type="checkbox" :id="topping.id" class="hidden" v-model="topping.isChecked" />
            <label :for="topping.id" class="inline-flex items-center justify-between">
              <div class="bg-white border-2 border-gray-200 rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 stroke-white fill-yellow-500"
                  :class="{ 'rotate-45 fill-blue-500': topping.isChecked }"
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
        <button
          class="bg-blue-500 text-white w-32 py-2 px-2 rounded-md flex gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 items-center text-center justify-center"
          @click="addToppingToCart"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import toppings from '../store/toppings.json'

export default {
  data() {
    return {
      toppings,
      open: false,
      selectedItemIndex: null,
    }
  },
  props: ['cart'],
  computed: {
    total() {
      return this.cart.reduce((acc, item) => {
        const toppingTotal = item.toppings.reduce(
          (tAcc, topping) => tAcc + topping.price * topping.quantity,
          0,
        )
        return acc + item.quantity * item.harga + toppingTotal
      }, 0)
    },
},
  methods: {
    openModal(index) {
      this.selectedItemIndex = index
      this.open = true
      this.toppings.forEach((topping) => {
        topping.isChecked = false
      })
    },
    addToppingToCart() {
      if (this.selectedItemIndex === null) return

      const selectedToppings = this.toppings
        .filter((topping) => topping.isChecked)
        .map((topping) => ({ ...topping, quantity: 1 }))

      const existingToppings = this.cart[this.selectedItemIndex].toppings

      selectedToppings.forEach((newTopping) => {
        const existingTopping = existingToppings.find((topping) => topping.id === newTopping.id)
        if (existingTopping) {
          existingTopping.quantity += newTopping.quantity
        } else {
          existingToppings.push(newTopping)
        }
      })

      this.open = false
    },

    removeFromCart(index) {
      this.$emit('remove-from-cart', index)
    },
    buttonTambah(index) {
      this.$emit('button-Tambah', index)
    },
    buttonKurang(index) {
      this.$emit('button-kurang', index)
    },
    buttonTambahTopping(cartIndex, toppingIndex) {
      this.cart[cartIndex].toppings[toppingIndex].quantity++
    },
    buttonKurangTopping(cartIndex, toppingIndex) {
      const topping = this.cart[cartIndex].toppings[toppingIndex]
      if (topping.quantity > 1) {
        topping.quantity--
      } else {
        this.cart[cartIndex].toppings.splice(toppingIndex, 1)
      }
    },
    totalSatuan(item){
      
      const toppingTotal = item.toppings.reduce(
      (tAcc, topping) => tAcc + topping.price * topping.quantity,
      0
    );
    
    return item.quantity * item.harga + toppingTotal;
    
},
  },
}
</script>
