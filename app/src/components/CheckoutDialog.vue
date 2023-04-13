<template>
  <v-row justify="center">
    <v-dialog
      v-model="store.checkoutDialogIsOpen"
      persistent
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Let's finish your order!</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="First name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <small>* indicates required field</small>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  color="primary"
                  block
                  @click="store.finishCheckout"
                >
                  Finish checkout
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
            variant="text"
            color="secondary"
            block
            @click="store.checkoutDialogIsOpen = false;"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { useAppStore } from "@/store/app";

export default {
  name: "CheckoutDialog",
  setup() {
    const store = useAppStore();
    return { store };
  },
  data: () => ({
    dialog: false,
  }),
}
</script>

<style scoped>

</style>
