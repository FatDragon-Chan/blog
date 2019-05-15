<template>
  <div id="article-card">
    <div class="article-card-wrap">
      <div
        class="article-cover"
        :style="{
          backgroundImage: 'url(' + article.banner + ')'
        }"
      >
        <div class="article-title">
          <span>{{ article.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/color.styl'
#article-card
  position: relative
  background-color: $color-white
  padding: 20px
  margin-bottom: 20px
  &:last-child
    margin-bottom: 0px
  box-shadow: 0px 0px 5px 0px rgba(38, 42, 48, .1)
  min-height: 603px
  @media (max-width: 768px)
    min-height: 285.5px
    padding: 10px
  line-height: 1.2
  animation: show .8s
  .article-card-wrap
    position relative
    .article-cover
      position relative


@keyframes show {
  from {
    margin-top: -10px;
    opacity: 0;
  }
  to {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
