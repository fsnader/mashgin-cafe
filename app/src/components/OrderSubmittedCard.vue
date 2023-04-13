<template>
  <v-card class="text-center pa-5">
    <h4 class="text-h4">We received your order!</h4>
    <h5 class="text-h5">It will be delivered to you soon 😄</h5>

    <div>
      <v-icon icon="mdi-check-circle-outline" color="#608070" size="128">

      </v-icon>
    </div>
    <h6 class="text-h6">Order Number: {{ orderNumber }}</h6>
    <v-btn variant="text" color="primary" @click="$emit('close')">
      Close
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: ['orderNumber'],
  emits: ['close']
}
</script>

<style scoped>
h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
}
</style>
