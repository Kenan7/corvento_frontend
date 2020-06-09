import events from "@/api/events";

const state = {
  featuredEvents: [],
  nonFeaturedEvents: [],
  error: [],
  detailEvent: {},
};

const getters = {
  featuredEvents: (state) => state.featuredEvents,
  nonFeaturedEvents: (state) => state.nonFeaturedEvents,
  detailEvent: (state) => state.detailEvent,
  isLoaded: (state) => {
    return state.featuredEvents.count > 0 || state.nonFeaturedEvents.count > 0;
  },
};
const mutations = {
  ["F_EVENTS_SUCCESS"](state, payload) {
    state.featuredEvents = payload;
  },
  ["NF_EVENTS_SUCCESS"](state, payload) {
    state.nonFeaturedEvents = payload;
  },
  ["DETAIL_EVENT_SUCCESS"](state, payload) {
    state.detailEvent = payload;
  },
};
const actions = {
  getEventBySlug({ commit, dispatch }, slug) {
    return events
      .getEventBySlug(slug)
      .then(({ data }) => commit("DETAIL_EVENT_SUCCESS", data))
      .catch((error) => {
        const notification = {
          type: "error",
          message: "Etkinlikler gösterilemedi " + error.message,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },
  getFeaturedEvents({ commit, dispatch }) {
    return events
      .getFeaturedEvents()
      .then(({ data }) => commit("F_EVENTS_SUCCESS", data))
      .catch((error) => {
        const notification = {
          type: "error",
          message: "Etkinlikler gösterilemedi " + error.message,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },

  getNonFeaturedEvents({ commit, dispatch }) {
    return events
      .getNonFeaturedEvents()
      .then(({ data }) => commit("NF_EVENTS_SUCCESS", data))
      .catch((error) => {
        const notification = {
          type: "error",
          message: "Etkinlikler gösterilemedi " + error.message,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
