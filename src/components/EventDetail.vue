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
              <v-list-item-title class="headline"
                >Our Changing Planet</v-list-item-title
              >
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img
            contain
            src="https://storage.googleapis.com/steam-talent-277511-media/event_images/1.jpg?Expires=1591733058&GoogleAccessId=222122727777-compute%40developer.gserviceaccount.com&Signature=ZJQ%2FdjlpWImRqBOxGlwbX1kZ4k7fG4zX40IHtO4YiYTEG3nDz1Ytcbq1v65PcYcld0jXmvNjfcS0sYTYn2%2FudqufjWyXHzol90ZyGsIq4t%2BGxlIw4bYdLn5BZL4%2BW5twkMbf2mDGDcQou%2BZ8hxsLzu%2BavvMmOxArUHdEqggCzZDyZfRsNidizeOMRAOVvxjeOOJlZ36jOfIXRAd2SNGvhzL7UX8FxcB%2BW0OVdra6fBOt8PzVFC27bYYhjqoPM%2BbzFTDCQ1OKZNwpeMyYoSMYd6ndTuxwrc9dLihxVnCIztqlPu7nxhavsMrOAy2%2B3DSytpmBhIudAjBwNai4DXr9mg%3D%3D"
            height="300"
          ></v-img>

          <v-card-text>
            Visit ten places on our planet that are undergoing the biggest
            changes today.
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
export default {};
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
