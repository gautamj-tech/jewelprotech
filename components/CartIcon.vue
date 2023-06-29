<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 4h16M4 8h16M4 12h16M4 16h16M12 20h8"
      ></path>
    </svg>
    <span class="bg-red-500 text-white text-sm px-2 py-1 rounded-full absolute top-0 right-0">
      {{ cartItemsCount }}
    </span>
  </div>
</template> 

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cartItems']),
    cartItemsCount() {
      return this.cartItems.length;
    },
  },
};
</script>
