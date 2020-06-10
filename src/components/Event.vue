<template>
  <v-container fluid>
    <p class="display-2 ma-2 font-weight-thin">Öne çıkanlar</p>

    <FeaturedEvents />

    <v-divider dark="false" class="my-4"></v-divider>
    <p class="display-2 ma-2 font-weight-thin">Tüm etkinlikler</p>

    <NonFeaturedEvents />
  </v-container>
</template>

<script>
import FeaturedEvents from "@/components/FeaturedEvents.vue";
import NonFeaturedEvents from "@/components/NonFeaturedEvents.vue";
export default {
  components: { FeaturedEvents, NonFeaturedEvents },
};
</script>

<style lang="scss" scoped>
.small {
  height: 40px;
  font-size: 12pt;
}
</style>
