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
      <h6 class="text-h6 font-weight-bold">{{item.price}}</h6>
      <v-spacer></v-spacer>


      <v-btn size="large" color="surface-variant" variant="text">
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

export default {
  name: "MenuItem",
  props: ['item'],
  methods: {
    getImageUrl(item) {
      return menuService.getImageUrl(item.image_id);
    }
  }
}
</script>

<style scoped>

</style>
