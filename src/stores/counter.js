import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
    product: {},
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      
    },
  },
});
