<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
    <v-app-bar-title>
      Mashgin's Cafe
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn @click="openCart" icon="mdi-cart-outline"></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    v-model="menu"
    temporary
  >
    <v-list
      :items="items"
    ></v-list>
  </v-navigation-drawer>
  <v-navigation-drawer v-model="store.cartIsOpen" width="350" location="right" temporary>
    <my-cart></my-cart>
  </v-navigation-drawer>
</template>

<script>
import MyCart from "@/components/MyCart.vue";
import {useAppStore} from "@/store/app";
export default {
  components: {
    MyCart,
  },
  setup() {
    const store = useAppStore();
    return { store };
  },
  data: () => ({
    menu: false,
    group: null,
    items: [
      {
        title: 'Home',
        value: 'Home',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),
  methods: {
    toggleMenu() {
      this.menu = !this.menu
    },
    openCart() {
      this.menu = false;
      this.store.toggleCart();
    }
  }
}
</script>
