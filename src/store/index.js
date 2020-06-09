import Vue from "vue";
import Vuex from "vuex";

import storeEvents from "@/store/storeEvents";
import notifications from "@/store/notifications";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    storeEvents,
    notifications,
  },
});
