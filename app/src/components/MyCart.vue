<template>
  <v-container>
    <v-list lines="one">
      <v-list-item>
        <h3>Your selected items</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :title="getItemTitle(item)"
      >
        <template v-slot:append>

          <v-btn
            icon="mdi-minus"
            variant="text"
          ></v-btn>
          <v-chip class="quantity-chip chip">
            {{ item.quantity }}
          </v-chip>
          <v-btn
            icon="mdi-plus"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Total:</v-list-item-title>
        <template v-slot:append>
          <v-chip class="total-chip chip">$ 100</v-chip>
        </template>
      </v-list-item>
      <v-list-item>
          <v-btn color="primary" style="width: 100%">Checkout</v-btn>
      </v-list-item>
    </v-list>
  </v-container>

</template>

<script>
export default {
  name: "MyCart",
  data: () => ({
    items: [{
      id: 1,
      name: 'Croissant',
      price: 10,
      quantity: 1
    },
    {
      id: 1,
      name: 'Bread',
      price: 10,
      quantity: 1
    },
    {
      id: 1,
      name: 'Croissant',
      price: 10,
      quantity: 1
    }]
  }),
  methods: {
    getItemTitle(item) {
      return `${item.name} - $${item.price}`
    }
  }
}
</script>

<style scoped>
.chip {
  display: flex;
  justify-content: center
}
.quantity-chip {
  margin: 10px
}
.total-chip {
  width: 148px;
}
</style>
