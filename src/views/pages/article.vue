<template>
  <div class="article_container">
    <div class="main">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <toHome></toHome>
  </div>
</template>

<script>
import toHome from "@/views/pages/toHome.vue";

export default {
  name: "article",

  components: {
    toHome
  }
};
</script>

<style lang="scss" scoped>
.article_container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .main {
    position: relative;
    top: 13vh;
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    padding: 3vw;
    .left {
      width: 70vw;
      margin-right: 20px;
      background: green;
      border-radius: 5px;
    }
    .right {
      width: 23vw;
      background: green;
      border-radius: 5px;
    }
  }
}
</style>
