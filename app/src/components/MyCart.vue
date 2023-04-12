<template>
  <v-container>
    <v-list lines="one">
      <v-list-item>
        <h3>Your selected items</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in store.cartArray"
        :key="item.id"
        :title="getItemTitle(item)"
      >
        <template v-slot:append>

          <v-btn
            @click="store.removeItem(item)"
            icon="mdi-minus"
            variant="text"
          ></v-btn>
          <v-chip class="quantity-chip chip">
            {{ item.quantity }}
          </v-chip>
          <v-btn
            @click="store.addItem(item)"
            icon="mdi-plus"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Total:</v-list-item-title>
        <template v-slot:append>
          <v-chip class="total-chip chip">{{formattedTotal}}</v-chip>
        </template>
      </v-list-item>
      <v-list-item>
          <v-btn color="primary" style="width: 100%">Checkout</v-btn>
      </v-list-item>
    </v-list>
  </v-container>

</template>

<script>
import {useAppStore} from "@/store/app";

export default {
  name: "MyCart",
  setup() {
    const store = useAppStore();
    return { store };
  },
  methods: {
    getItemTitle(item) {
      return `${item.name} - $${item.price}`
    }
  },
  computed: {
    formattedTotal() {
      return `$ ${this.store.total.toFixed(2)}`;
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
