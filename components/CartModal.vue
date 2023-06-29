<template>
  <div>
    <div
      v-show="isCartOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-4 max-w-md">
        <h2 class="text-2xl font-semibold mb-4">Cart</h2>
        <div v-if="cartItems.length === 0" class="text-gray-500">Your cart is empty.</div>
        <div v-else>
          <div v-for="product in cartItems" :key="product.id" class="flex items-center mb-4">
            <img :src="product.image" :alt="product.title" class="w-12 h-12 object-cover mr-4" />
            <div>
              <h3 class="text-lg">{{ product.title }}</h3>
              <p class="text-gray-600">Price: ${{ product.price }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button @click="toggleCart" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
    <div @click="toggleCart" class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
      <cart-icon></cart-icon>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CartIcon from '@/components/CartIcon';

export default {
  components: {
    CartIcon,
  },
  computed: {
    ...mapState(['cartItems']),
    isCartOpen: {
      get() {
        return this.$store.state.isCartOpen;
      },
      set(value) {
        this.$store.commit('setCartOpen', value);
      },
    },
  },
  methods: {
    ...mapMutations(['toggleCart']),
  },
};
</script>
