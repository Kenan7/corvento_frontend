<template>
  <v-row>
    <v-col
      v-for="event in featuredEvents"
      :key="`${event.id}`"
      md="4"
      sm="12"
      xs="12"
    >
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            width="cardWidth"
            dark
            color="blue-grey darken-4"
            :elevation="hover ? 18 : 10"
            :to="{ name: 'eventDetail', params: { slug: event.slug } }"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-thin">{{
                  event.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="event.image" height="194"></v-img>

            <v-card-text>
              <v-chip
                class="ma-2 text--white"
                color="amber lighten-1"
                outlined
                :small="chipSize"
              >
                <v-icon left small color="amber lighten-1"
                  >mdi-code-json</v-icon
                >
                {{ event.category.name }}
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
                {{ event.community }}
              </v-chip>

              <v-chip
                class="ma-2 text--white"
                color="amber lighten-1"
                outlined
                :small="chipSize"
              >
                <v-icon left small color="amber lighten-1"
                  >mdi-map-marker</v-icon
                >
                {{ event.venue }}
              </v-chip>

              <!-- <v-row>
                  <v-col cols="4">
                    <v-list-item>
                      <v-btn small rounded outlined color="amber lighten-1">
                        <v-icon left>mdi-code-json</v-icon
                        >{{ event.category.name }}
                      </v-btn>
                    </v-list-item>
                    <v-list-item>
                      <v-btn small rounded outlined color="amber lighten-1">
                        <v-icon left>mdi-account-group</v-icon
                        >{{ event.community }}
                      </v-btn>
                    </v-list-item>

                    <v-list-item>
                      <v-btn small rounded outlined color="amber lighten-1">
                        <v-icon left>mdi-map-marker</v-icon>{{ event.venue }}
                      </v-btn>
                    </v-list-item>
                  </v-col>
                </v-row> -->
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="#ff8906" class="text-capitalize">
                ETKİNLİĞE GİT
                <v-icon right large>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
          return true;
        case "lg":
          return false;
        case "xl":
          return false;
        default:
          return true;
      }
    },
    ...mapGetters("storeEvents", ["featuredEvents", "isLoaded"]),
  },
  methods: {
    ...mapActions("storeEvents", ["getFeaturedEvents"]),
  },

  mounted() {
    this.getFeaturedEvents();
  },
};
</script>

<style lang="scss" scoped></style>
