<template>
  <v-app>
    <Navbar />
    <!-- <v-content> -->
    <v-container>
      <transition name="router-anim">
        <router-view />
      </transition>
    </v-container>
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";
export default { components: { Navbar } };
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.v-application {
  background-color: var(--v-background-base) !important;
}
</style>
