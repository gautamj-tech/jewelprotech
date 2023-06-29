const state = {
  products: [],
  searchQuery: '',
  filteredProducts: [],
  cart: [],
  wishlist: [],
  selectedProduct: null,
}

const mutations = {
  setProducts(state, products) {
    state.products = products
    state.filteredProducts = products
  },
  setSearchQuery(state, query) {
    state.searchQuery = query
  },
  filterProducts(state) {
    if (state.searchQuery === '') {
      state.filteredProducts = state.products
    } else {
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    }
  },
  sortProductsByPrice(state) {
    state.filteredProducts.sort((a, b) => a.price - b.price)
  },
  sortProductsByRating(state) {
    state.filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate)
  },
  
  addToCart(state, product) {
    state.cart.push(product)
  },
  addToWishlist(state, product) {
    state.wishlist.push(product)
  },
  setSelectedProduct(state, product) {
    state.selectedProduct = product
  },
}

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      console.log(products)
      commit('setProducts', products)
    } catch (error) {
      console.error(error)
    }
  },
  async fetchProductById({ commit }, id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const product = await response.json()
      commit('setSelectedProduct', product)
    } catch (error) {
      console.error(error)
    }
  },
  setSearchQuery({ commit }, query) {
    commit('setSearchQuery', query)
    commit('filterProducts')
  },
  async searchProducts({ commit },query) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?search=${query}`)
      const products = await response.json()
      commit('setProducts',  products.filter(item => item.title.toLowerCase().includes(query.toLowerCase())))
    } catch (error) {
      console.error(error)
    }
  },
  sortProductsByPrice({ commit }) {
    commit('sortProductsByPrice')
  },
  sortProductsByRating({ commit }) {
    commit('sortProductsByRating')
  },
  addToCart({ commit }, product) {
    commit('addToCart', product)
  },
  addToWishlist({ commit }, product) {
    commit('addToWishlist', product)
  },
}

const getters = {
  filteredProducts: state => state.filteredProducts,
  getProductById: state => id => {
    console.log(state.products)
    return state.products.find(product => product.id === id)
  },
  cart: state => state.cart,
  wishlist: state => state.wishlist,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
