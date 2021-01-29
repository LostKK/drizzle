<template>
  <div class="about_container">
    <direct alive="About" bgColor="white"></direct>
    <div class="first_page">
      <mavon-editor codeStyle="monokai-sublime" v-html="contentHtml" />
    </div>

    <div class="flower flower-size">
      <img src="@/assets/picture/about/flower2.jpg" />
    </div>
  </div>
</template>

<script>
import direct from "@/views/component/direct.vue";

export default {
  name: "about2",

  components: {
    direct
  },

  data() {
    return {
      contentHtml:
        "<h1>很高兴认识你！</h1><p><br></p><p>惊鸿一瞥已属侥幸&nbsp;求之不得才是常态</p><p>而在这两极之间&nbsp;就是生活本身</p><p>深深浅浅的缘分&nbsp;轻轻重重的情感</p><p>人生的机缘极其奇妙</p><p>然而和一些人</p><p>有的即便是一些轻而浅的相处</p><p>一些淡而微薄的陪伴</p><p>仍然觉得&nbsp;存在过&nbsp;就很好</p><p><br></p><p>你好呀，我是KK，很高兴认识你！</p><p>生于南方夏末&nbsp;一九九x&nbsp;</p><p>粗枝大叶</p><p>资深的云村用户 电影迷</p><p>夏天只要一天不刮胡子&nbsp;没两天就一圈胡茬</p><p>最大愿望&nbsp;是去遇见&nbsp;一场很大很大的雪</p>"
    };
  }
};
</script>

<style lang="scss" scoped>
.about_container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  .first_page {
    display: flex;
    padding-top: 10vh;
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 100px 20px 40px;
    min-height: auto;
    z-index: 9;
  }
  .shadow {
    box-shadow: none !important;
    background: none;
  }
  .flower {
    position: absolute;

    z-index: 8;
  }
}

.flower-size {
  right: 10%;
  top: 30%;
  img {
    height: 500px;
    width: auto;
  }
}

@media screen and (max-width: 768px) {
  .flower-size {
    display: none;
  }
}

::v-deep .markdown-body h1 {
  border: none;
}
</style>
