<script setup lang="ts">
import { RouterView } from "vue-router";
import GlobalHeader from "./components/Header/GlobalHeader.vue";
</script>

<template>
  <GlobalHeader />
  <RouterView />
</template>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
}
.container {
  width: 100%;
  height: 100px;
  background-color: black;
}
</style>
