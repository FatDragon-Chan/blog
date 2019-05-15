<template>
  <div id="home">
    <articleCard
      class="article-card"
      v-for="(article, index) in articleList"
      :key="index"
      :article="article"
    />
  </div>
</template>

<script>
import articleCard from "../../../common/articleCard/articleCard";
export default {
  name: "home",
  components: {
    articleCard
    // noData
  },
  data() {
    return {
      articleList: [
        {
          title: "陈子安博客搭建起步",
          postedTime: "1557913566000",
          category: { id: 1, name: "默认分类" },
          accessNumber: 12,
          introduce: "第一次从0开始搭建自己的个人博客",
          tags: [{ tagid: 1, name: "博客" }],
          banner: "https://ncdn.camarts.cn/77e02812.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
#home
  position: relative;
  padding: 30px 10px;
  min-height: 100px;
  .article-card
    position: relative;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 5px 0 rgba(38,42,48,.1);
    min-height: 603px;
    line-height: 1.2;
    animation: show-data-v-09c83323 .8s;
</style>
