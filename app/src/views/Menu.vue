<template>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          :lg="3"
          :md="6"
          :sm="6"
        >
         <menu-item :item="item"></menu-item>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
import menuService from "@/services/menuService";

export default {
  components: {
    MenuItem,
  },
  data: () => ({
    items: [],
  }),
  async created() {
    this.items = await menuService.listItems();
  },
  methods: {
  }
}

</script>
