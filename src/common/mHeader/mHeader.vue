<template>
  <div id="m-header">
    <div class="header-wrap" :style="{ height: isPc ? '90px' : '60px' }">
      <div
        class="header-logo"
        @click="toHomeFromLogo"
        :style="{
          'justify-content': isPc ? 'space-between' : 'center',
          padding: isPc ? '25px' : '0px'
        }"
      >
        <p class="line" v-if="isPc"></p>
        <p class="blog-name">{{ "Bunana" }}</p>
        <!-- blogInfo.blogname|| -->
        <p class="line" v-if="isPc"></p>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPc: true // 识别是否为pc
    };
  },
  methods: {
    toHomeFromLogo() {}
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/color.styl'
*
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
#m-header
  position: relative
  width: 100%
  background-color: #f9f9f9
  .header-wrap
    position: relative
    max-width: 1000px
    padding: 0 10px
    margin: 0 auto
    height: 90px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    transition: height .3s
    .header-logo
      height: 100%
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-between
      color: $color-main
      font-size: 20px
      font-weight: bold
      padding: 25px 0
      &:hover
        cursor: pointer
        .line
          width: 0px
      .line
        display :block
        width: 70px
        height: 2px
        background-color: $color-main
        animation: logo-line .5s
        transition: width .3s
      .blog-name
        animation: logo-name .5s
    .toggle
      width: 24px
      height: 24px
      background-color: #f9f9f9
      padding: 5px
      cursor: pointer
      line-height: 0
      .toggle-line
        position: relative
        display: inline-block
        vertical-align: top
        width: 100%
        height: 2px
        margin-top: 4px
        background-color: $color-main
        &:first-child
          margin-top: 0px
  .mobile-tab-wrap
    width: 100%
    transition: all .3s
    // overflow: hidden
    border-top: 1px solid #eeeeee
    .tab
      position: relative
      width: 100%
      padding: 8px 15px
      font-size: 12px
      line-height: 1
      .iconfont
        font-size: 12px
        margin-right: 5px

@keyframes logo-name {
  from {
    margin-left: -60px;
    opacity: 0
  }
  to {
    margin-left: 0px;
    opacity: 1
  }
}
@keyframes logo-line {
  from {
    width: 0px;
  }
  to {
    width: 70px;
  }
}
</style>
