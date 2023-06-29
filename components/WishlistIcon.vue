<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      ></path>
    </svg>
    <span class="bg-red-500 text-white text-sm px-2 py-1 rounded-full absolute top-0 right-0">
      {{ wishlistItemsCount }}
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['wishlist']),
    wishlistItemsCount() {
      return this.wishlist.length;
    },
  },
};
</script>
