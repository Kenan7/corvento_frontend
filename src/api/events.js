import session from "./session";

export default {
  getNonFeaturedEvents() {
    return session.get("http://127.0.0.1:8001/api/events/list/");
  },
  getFeaturedEvents() {
    return session.get("http://127.0.0.1:8001/api/events/featured/");
  },
  getEventBySlug(slug) {
    return session.get("http://127.0.0.1:8001/api/events/" + slug + "/detail/");
  },
};
