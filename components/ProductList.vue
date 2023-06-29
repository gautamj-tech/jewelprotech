<template>
  <div>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id" class="border border-gray-300 rounded p-4 mb-4">
        <h3 class="text-xl font-bold">{{ product.title }}</h3>
        <img :src="product.image" :alt="product.title" class="w-32 h-32 object-contain rounded mt-2" />
        <p class="mt-2">Price: {{ product.price }}</p>
        <p>Rating: {{ product.rating.rate }}</p>
        <button @click="addToCart(product)" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2">Add to Cart</button>
        <button @click="addToWishlist(product)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-2">Add to Wishlist</button>
        <button @click="viewProduct(product)" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">View Product</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    filteredProducts() {
      return this.$store.getters.filteredProducts
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
    addToWishlist(product) {
      this.$store.dispatch('addToWishlist', product)
    },
    viewProduct(product) {
      this.$router.push(`/product?id=${product.id}`)
    },
  },
}
</script>
