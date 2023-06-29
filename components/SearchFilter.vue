<template>
  <div class="flex items-center">
    <input type="text" v-model="searchQuery" placeholder="Search for products" class="border border-gray-300 rounded px-4 py-2 mr-2" />
    <button @click="search" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    search() {
      this.$store.dispatch('setSearchQuery', this.searchQuery)
    },
  },
}
</script>

