// Utilities
import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    cart: {}
  }),
  actions: {
    addItem(item) {
      if (this.cart[item.id]) {
        return this.cart[item.id].quantity++;
      }

      this.cart[item.id] = item;
      this.cart[item.id].quantity = 1;
    },
    removeItem(item) {
      if (!this.cart[item.id]) {
        return;
      }

      if (this.cart[item.id].quantity > 1) {
        return this.cart[item.id].quantity--;
      }

      if (this.cart[item.id].quantity === 1) {
        delete this.cart[item.id];
      }
    },
  },
  getters: {
    cartArray() {
      return Object.values(this.cart);
    },
    total() {
      return this.cartArray.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    }
  }
})
