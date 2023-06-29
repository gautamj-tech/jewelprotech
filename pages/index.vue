<template>
  <div>
    <search-bar></search-bar>
    <button @click="sortByPrice" class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-4">Sort by Price</button>
    <button @click="sortByRating" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4">Sort by Rating</button>
    <product-list></product-list>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar.vue'
import ProductList from '~/components/ProductList.vue'

export default {
  components: {
    SearchBar,
    ProductList,
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    sortByPrice() {
      this.$store.dispatch('sortProductsByPrice')
    },
    sortByRating() {
      this.$store.dispatch('sortProductsByRating')
    },
  },
}
</script>


