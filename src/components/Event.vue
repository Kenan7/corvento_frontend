<template>
  <v-row>
    <v-col v-for="event in featuredEvents" :key="`${event.id}`">
      <v-hover>
        <template v-slot="{ hover }">
          <v-card
            max-width="450"
            dark
            color="blue-grey darken-4"
            :elevation="hover ? 18 : 10"
            :to="{ name: 'eventDetail', params: { slug: event.slug } }"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">{{
                  event.title
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  event.community
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="event.image" height="194"></v-img>

            <v-card-text>
              {{ event.category.name }}
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
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("storeEvents", [
      "featuredEvents",
      "nonFeaturedEvents",
      "isLoaded",
    ]),
    ...mapActions("storeEvents", ["getFeaturedEvents", "getNonFeaturedEvents"]),
  },

  created() {
    this.getFeaturedEvents;
    this.getNonFeaturedEvents;
  },
};
</script>
