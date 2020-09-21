<template>
  <div class="toHome_container">
    <div class="main">
      <img src="@/assets/img/toHome.png" @click="toHome" />
    </div>
  </div>
</template>

<script>
export default {
  name: "toHome",

  methods: {
    toHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.toHome_container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  height: 10vw;
  width: 10vw;
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      height: 8vw;
      width: 8vw;
    }
  }
}
</style>
