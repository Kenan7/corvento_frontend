<template>
  <v-container>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          max-width="1500"
          max-height="800"
          class="mx-auto"
          dark
          color="blue-grey darken-4"
          :elevation="hover ? 18 : 10"
          to="/event"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ detailEvent.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img contain :src="detailEvent.image" height="300"></v-img>

          <v-card-text>
            {{ detailEvent.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn text color="amber lighten-1">
              Read
            </v-btn>
            <v-btn text color="amber lighten-1">
              Bookmark
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["slug"],
  computed: {
    ...mapGetters("storeEvents", ["detailEvent", "isLoaded"]),
    ...mapActions("storeEvents", ["getEventBySlug(slug)"]),
  },

  created() {
    this.getEventBySlug(this.slug);
  },
};
</script>

<style>
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
