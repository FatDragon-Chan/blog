import Vue from "vue";
import Router from "vue-router";

import blog from "./router/blog";
import admin from "./router/admin";

Vue.use(Router);

const routes = [...admin, ...blog];
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
