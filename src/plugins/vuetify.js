import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        background: "#061F2F",
      },
    },
    dark: true,
  },
};

export default new Vuetify(opts);
