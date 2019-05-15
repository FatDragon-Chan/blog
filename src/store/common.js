// import api from "../api/index";
import {
  SCREEN_CHANGE
  // SHOW_RIGHT_NAV,
  // IS_ADMIN_WRAP,
  // SET_ARTICLE_MENU,
  // SET_ARTICLE_MENU_SOURCE,
  // SET_ARTICLE_MENU_TAG,
  // SET_COMMENTS_INFO
} from "./mutation-types";
const state = {
  screen: {
    width: 0,
    height: 0
  },
  showLeftNav: false // 是否显示左菜单
};
const getters = {
  screen(state) {
    return state.screen;
  }
};
const mutations = {
  [SCREEN_CHANGE](state, data) {
    state.screen = data;
  }
};
const actions = {};
export default {
  state,
  mutations,
  actions,
  getters
};
