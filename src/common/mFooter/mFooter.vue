<template>
  <div id="m-footer">
    <div class="footer-wrap" :style="{ fontSize: isPc ? '13px' : '12px' }">
      <p>小小的心脏跳过了{{ runningTime }}秒</p>
      <!-- <p>@{{ blogInfo.blogName || '博客' }} ———— {{ blogInfo.sign }}</p> -->
      <p>@ChenZiAn---路漫漫其修远兮</p>
      <p>
        本站点采用
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
          target="_blank"
          >知识共享 署名-非商业性使用-禁止演绎 4.0 国际 许可协议</a
        >
      </p>
      <p>本站由 @{{ "ChenZiAn" }} 创建 - © 2019. 粤ICP备19029744号-1</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; // , mapMutations
export default {
  name: "m-footer",
  // components: {
  //   headerTabView
  // },
  data() {
    return {
      isPc: false, // 识别是否为pc;
      runningTime: 0 // 网站运营时间
    };
  },
  watch: {
    screen(value) {
      this.isPc = true;
      if (value.width <= 768) {
        this.isPc = false;
      }
    }
  },
  computed: {
    ...mapGetters(["screen", "blogInfo"])
  },
  created() {
    this.running();
  },
  methods: {
    running() {
      let startTime = new Date("2018/05/01 00:00:00");
      setInterval(() => {
        let time = new Date() - startTime;
        let second = parseInt(time / 1000, 10);
        this.runningTime = second;
      }, 1000);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/color.styl'
*
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
#m-footer
  position: relative
  width: 100%
  background-color: $color-main
  .footer-wrap
    height:120px
    padding: 0 20px
    margin: 0 auto
    position: relative
    max-width: 1000px
    font-size: 13px
    display: -ms-flexbox
    display: flex
    -ms-flex-direction: column
    flex-direction: column
    -ms-flex-pack: center
    justify-content: center
    color: #999
    > p
      margin: 2px 0
      a
        color: rgba(59, 116, 241, .8)
        text-decoration: underline
</style>
