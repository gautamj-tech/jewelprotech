<template>
  <div v-if="product">
    <h2 v-if="product.title" class="text-2xl font-bold">{{ product.title }}</h2>
    <img v-if="product.image" :src="product.image" class="w-64 h-64 object-contain rounded mt-2" />
    <p v-if="product.price" class="mt-2">Price: {{ product.price }}</p>
    <p v-if="product.rating && product.rating.rate">Rating: {{ product.rating.rate }}</p>
    <p v-if="product.description">Description: {{ product.description }}</p>
    <button @click="addToCart(product)" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
    <button @click="addToWishlist(product)" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-4">Add to Wishlist</button>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script>

export default {
    computed: {
    product() {
      return this.$store.state.selectedProduct
    },
  },
  created() {
    const productId = this.$route.query.id
    this.$store.dispatch('fetchProductById', productId)
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
    addToWishlist(product) {
      this.$store.dispatch('addToWishlist', product)
    },
  }
};
</script>