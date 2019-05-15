import Vue from "vue";
import Vuex from "vuex";

import common from "./store/common";
import admin from "./store/admin";
import blog from "./store/blog";

Vue.use(Vuex);

const modules = { common, admin, blog };

export default new Vuex.Store({
  modules
});
