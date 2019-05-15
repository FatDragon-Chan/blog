<template>
  <div id="app">
    <!-- 博客页面 -->
    <div class="content-wrap">
      <!-- Header开始 -->
      <m-header />
      <!-- Header结束 -->
      <!-- content 开始 -->
      <div class="view-wrap" :style="{ width: '1000px' }">
        <router-view></router-view>
      </div>
      <!-- content 结束 -->
      <!-- Footer开始 -->
      <m-footer />
      <!-- Footer结束 -->
    </div>
  </div>
</template>

<script>
import { SCREEN_CHANGE } from "./store/mutation-types"; // SHOW_TOKEN_ERROR
import mHeader from "./common/mHeader/mHeader";
import mFooter from "./common/mFooter/mFooter";
export default {
  name: "app",
  components: {
    mHeader,
    mFooter
  },
  data() {
    return {};
  },
  mounted() {
    this.updateScreen();
    window.addEventListener("resize", this.updateScreen);
  },
  methods: {
    updateScreen() {
      this.$store.commit(SCREEN_CHANGE, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }
};
</script>
<style lang="stylus" src="./stylus/main.styl"></style>

<style lang="stylus">
body
  margin: 0;

#app
  width: 100%;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  position: absolute;
  .content-wrap
    flex: 1
    position: relative
    .view-wrap
      max-width: 1000px
      min-width: 320px
      margin: 0 auto
      padding: 0 10px
      min-height: calc(100vh - 120px)
      transition: width .3s
</style>
