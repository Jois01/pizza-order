<template>
  <nav class="flex justify-between bg-white shadow-xl p-6">
    <navbar />
  </nav>

  <section class="flex flex-col justify-center items-center">
    <div id="app" class="grid grid-cols-1 md:grid-cols-3 m-4">
      <div class="card col-span-2">
        <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
          <div class="card-title m-4 text-xl">Pizza list</div>
          <div class="card-body m-4 items-center">
            <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 items-center">
              <div class="card bg-gray-50 rounded-lg" v-for="pizza in pizzas" :key="pizza.id">
                <pizza :pizza="pizza" @add-to-cart="addToCart" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="">
          <div class="bg-white rounded-md p-10 m-6 shadow-xl">
            <h5 class="card-title">My Card</h5>
            <hr class="mt-2" />
            <cart
              :cart="cart"
              @remove-from-cart="removeFromCart"
              @button-tambah="buttonTambah"
              @button-kurang="buttonKurang"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import navbar from './components/navbar.vue'
import pizza from './components/pizza.vue'
import cart from './components/cart.vue'
import pizzas from './store/pizzas.json'

export default {
  components: {
    navbar,
    pizza,
    cart,
  },
  data() {
    return {
      pizzas,
      cart: [],
    }
  },
  methods: {
    addToCart(pizza) {
      const itemInCart = this.cart.find((item) => item.id === pizza.id)

      if (itemInCart) {
        itemInCart.quantity++
      } else {
        this.cart.push({
          ...pizza,
          quantity: 1,
        })
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    buttonTambah(index) {
      this.cart[index].quantity++
    },
    buttonKurang(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--
      } else {
        this.cart.splice(index, 1)
      }
    },
    addTopping(topping) {
      const newItem = JSON.parse(JSON.stringify(pizza))
      newItem.quantity = 1
      this.cart.push(newItem)
    },
  },
}
</script>
