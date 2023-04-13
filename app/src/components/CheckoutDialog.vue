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
          <v-form v-model="valid" @submit.prevent="finishCheckout">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="Email"
                    v-model="paymentInfo.email"
                    :rules="[rules.required, rules.email]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    label="Name on card"
                    :rules="[rules.required]"
                    v-model="paymentInfo.name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Card number"
                    type="number"
                    :rules="[rules.required, rules.creditCard]"
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
                    label="Expiry date"
                    :rules="[rules.required]"
                    type="month"
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
                    label="Security number"
                    type="number"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                    type="submit"
                    :disabled="!valid"
                    :loading="loading"
                    color="primary"
                    block
                  >
                    Finish checkout
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            variant="text"
            color="secondary"
            block
            @click="closeCheckoutDialog"
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

const EMAIL_VALIDATION_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const CREDIT_CARD_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/

export default {
  name: "CheckoutDialog",
  setup() {
    const store = useAppStore();
    return { store };
  },
  data: () => ({
    valid: false,
    loading: false,
    paymentInfo: {
      email: null,
      name: null,
      cardNumber: null,
      expiryDate: null,
    },
    rules: {
      required: value => !!value || 'You must enter a value.',
      email: value => EMAIL_VALIDATION_REGEX.test(value) || 'Invalid e-mail.',
      creditCard: value => CREDIT_CARD_REGEX.test(value) || 'Invalid credit card number.',

    },
    required: [
      value => value ? true : 'You must enter a value.',
    ],
  }),
  methods: {
    clearForm() {
      this.paymentInfo.email = null;
      this.paymentInfo.name = null;
      this.paymentInfo.cardNumber = null;
      this.paymentInfo.expiryDate = null;
    },
    async finishCheckout() {
      if(!this.valid) {
        return;
      }

      this.loading = true;
      try {
        await this.store.finishCheckout(this.paymentInfo);
        this.clearForm();
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
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
