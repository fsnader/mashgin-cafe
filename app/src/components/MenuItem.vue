<template>
  <v-card>
    <v-img
      :src="getImageUrl(item)"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="300px"
      cover
    >
      <v-card-title class="text-white" v-text="item.name"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-icon
        icon="mdi-currency-usd"
        size="large"
        start
      />
      <h6 class="text-h6 font-weight-bold">{{ getPrice(item) }}</h6>
      <v-spacer></v-spacer>

      <v-btn size="large" color="surface-variant" variant="text" @click="addToCart">
        <v-icon
          icon="mdi-plus"
          size="large"
          start
        />
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import menuService from "@/services/menuService";
import {useAppStore} from "@/store/app";

export default {
  name: "MenuItem",
  props: ['item'],
  setup() {
    const store = useAppStore();
    return { store };
  },
  methods: {
    getImageUrl(item) {
      return menuService.getImageUrl(item.image_id);
    },
    getPrice(item) {
      return item.price.toFixed(2);
    },
    addToCart() {
      this.store.addItem(this.item);
    }
  }
}
</script>

<style scoped>

</style>
