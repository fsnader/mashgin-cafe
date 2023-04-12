<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="96"
        src="@/assets/logo.png"
      />

      <h1 class="text-h2 font-weight-bold">Mashgin's Cafe</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">

        <v-col cols="auto">
          <v-btn
            color="secondary"
            @click="router.push({name: 'Menu'})"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-baguette"
              size="large"
              start
            />
            Select your food
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
import router from "@/router";
</script>
