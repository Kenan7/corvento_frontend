<template>
  <v-container>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          width="cardWidth"
          dark
          color="blue-grey darken-4"
          :elevation="hover ? 18 : 10"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-weight-thin">
                {{ detailEvent.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-img :src="detailEvent.image"></v-img>

          <v-card-text>
            <v-chip
              class="ma-2 text--white"
              color="amber lighten-1"
              outlined
              :small="chipSize"
            >
              <v-icon left small color="amber lighten-1">mdi-code-json</v-icon>
              {{ detailEvent.category.name }}
            </v-chip>

            <v-chip
              class="ma-2 text--white"
              color="amber lighten-1"
              outlined
              :small="chipSize"
            >
              <v-icon left small color="amber lighten-1"
                >mdi-account-group</v-icon
              >
              {{ detailEvent.community }}
            </v-chip>

            <v-chip
              class="ma-2 text--white"
              color="amber lighten-1"
              outlined
              :small="chipSize"
            >
              <v-icon left small color="amber lighten-1">mdi-map-marker</v-icon>
              {{ detailEvent.venue }}
            </v-chip>
          </v-card-text>
          <div
            v-html="detailEvent.description"
            class="grey lighten-1 pa-4 mx-4"
          ></div>
          <v-card-actions class="justify-end">
            <v-btn text color="#ff8906" class="text-capitalize">
              ETKİNLİĞE GİT
              <v-icon right large>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["slug"],
  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220px";
        case "sm":
          return "400px";
        case "md":
          return "500px";
        case "lg":
          return "600px";
        case "xl":
          return "800px";
        default:
          return "400px";
      }
    },
    chipSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
        default:
          return true;
      }
    },
    ...mapGetters("storeEvents", ["detailEvent", "isLoaded"]),
  },
  methods: {
    // ...mapActions("storeEvents", ["getEventBySlug(slug)"]),
    getEventBySlug() {
      this.$store.dispatch("storeEvents/getEventBySlug", this.slug);
    },
  },

  created() {
    this.getEventBySlug();
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

.customWhite {
  color: white !important;
}
</style>
