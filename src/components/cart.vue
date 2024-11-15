<template>
  <div>
    <div v-if="cart.length > 0">
      <div class="card m-4 gap-4" v-for="(item, index) in cart" :key="index">
        <div class="card-body flex justify-between">
          <div class="text-xl">{{ item.name }}</div>
          <img :src="item.image" alt="" class="w-32 rounded-md" />
        </div>
        <div class="topping mt-6">
          <div class="text-sm">TOPPING</div>
          <div class="text-sm">TOPPING</div>
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
              <svg
                class="size-2 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
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
              <svg
                class="size-2 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div class="harga text-xl m-2">{{ total }}</div>
        </div>
        <div class="trash">
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
        </div>
      </div>

      <hr class="my-8" />
    </div>
    <div v-else>
      <p>Keranjang kosong</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.harga * item.quantity, 0)
    },
  },
  methods: {
    removeFromCart(index) {
      this.$emit('remove-from-cart', index)
    },
    buttonTambah(index) {
      this.$emit('button-Tambah', index)
    },
    buttonKurang(index) {
      this.$emit('button-kurang', index)
    },
  },
}
</script>
