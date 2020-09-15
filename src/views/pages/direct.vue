<template>
  <div class="container">
    <div class="single" @click="toHome()">
      <font>主页</font>
    </div>
    <div class="single" @click="toNext({ name: 'article' })">
      <font>文章</font>
    </div>
    <div class="single" @click="toNext({ name: 'story' })">
      <font>故事</font>
    </div>
    <div class="single" @click="toNext({ name: 'collect' })">
      <font>收藏</font>
    </div>
    <div class="single" @click="toNext({ name: 'about' })">
      <font>关于</font>
    </div>
  </div>
</template>

<script>
export default {
  name: "direct",

  data() {
    return {};
  },

  methods: {
    toNext(val) {
      this.$router.push(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 50vw;
  // background: white;
  .single {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #848484;
    width: 100%;
    margin-right: 5px;
    // border-bottom: 5px solid #000;
    font:hover {
      color: #2e2e2e;
    }
    font:active {
      color: #2e2e2e;
    }
  }
}
</style>
