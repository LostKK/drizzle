<template>
  <div class="direct_container">
    <div class="main">
      <div class="single" @click="toNext('/')">
        <font>Home</font>
      </div>
      <div class="single" @click="toNext({ name: 'article' })">
        <font>Words</font>
      </div>
      <div class="single" @click="toNext({ name: 'story' })">
        <font>Story</font>
      </div>
      <div class="single" @click="toNext({ name: 'collect' })">
        <font>collect</font>
      </div>
      <div class="single" @click="toNext({ name: 'about' })">
        <font>About</font>
      </div>
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
.direct_container {
  display: flex;
  align-items: center;
  width: 10vw;
  height: 100vh;
  .main {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 100%;
    .single {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      color: #2e2e2e;
      width: 100%;
      height: 100%;
      font:hover {
        color: #848484;
      }
    }
  }
}
</style>
