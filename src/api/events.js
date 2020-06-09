import session from "./session";

export default {
  getNonFeaturedEvents() {
    return session.get("http://127.0.0.1:8000/api/events/list/");
  },
  getFeaturedEvents() {
    return session.get("http://127.0.0.1:8000/api/events/featured/");
  },
};
