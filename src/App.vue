<template>
  <div id="app">
    <!-- 博客页面 -->
    <div class="content-wrap">
      <!-- Header开始 -->
      <m-header />
      <!-- Header结束 -->
    </div>
  </div>
</template>

<script>
import mHeader from "./common/mHeader/mHeader";
export default {
  name: "app",
  components: {
    mHeader
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" src="./stylus/main.styl"></style>

<style lang="stylus">
body
  margin: 0;

app
  width: 100%;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  position: absolute;
  .content-wrap
    flex: 1;
    position: relative;
</style>
