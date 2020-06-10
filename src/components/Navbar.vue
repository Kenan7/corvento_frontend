<template>
  <div>
    <v-app-bar app clipped-left dark color="#27343B">
      <v-container>
        <v-row justify="center" align="center">
          <router-link to="/">
            <v-img
              src="@/assets/logo.svg"
              max-height="120"
              max-width="120"
              contain
            ></v-img>
          </router-link>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
