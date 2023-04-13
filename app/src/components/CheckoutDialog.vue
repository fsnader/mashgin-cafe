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
                  label="Email*"
                  v-model="paymentInfo.email"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Name on card*"
                  v-model="paymentInfo.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Card number*"
                  v-model="paymentInfo.cardNumber"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Expiry date*"
                  v-model="paymentInfo.expiryDate"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Security number*"
                  type="password"
                  required
                ></v-text-field>
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
                  @click="finishCheckout"
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
    paymentInfo: {
      email: null,
      name: null,
      cardNumber: null,
      expiryDate: null,
    }
  }),
  methods: {
    clearForm() {
      this.paymentInfo.email = null;
      this.paymentInfo.name = null;
      this.paymentInfo.cardNumber = null;
      this.paymentInfo.expiryDate = null;
    },
    async finishCheckout() {
      await this.store.finishCheckout(this.paymentInfo);
      this.clearForm();
    },
    closeCheckoutDialog() {
      this.clearForm();
      this.store.checkoutDialogIsOpen = false;
    }
  }
}
</script>

<style scoped>

</style>
