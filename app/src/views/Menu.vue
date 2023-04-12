<template>
  <v-container fluid>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row>
        <v-col>
          <div class="py-4" />
          <v-row>
            <v-img
              height="96"
              src="@/assets/logo.png"
            />
          </v-row>
          <v-row>
            <v-col cols="12" >
              <h3 class="text-lg-h3">Select your items</h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
    </v-responsive>
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
}

</script>
