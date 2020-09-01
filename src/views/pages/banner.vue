<template>
  <div class="banner">
    <div class="bg back"><h1>hello KK</h1></div>
  </div>
</template>

<script>
export default {
  name: "banner",

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";

.banner {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .bg {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: white url("../../assets/mountain.png") no-repeat center center
      scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    .back {
      z-index: 2;
    }

    h1 {
      display: block;
      margin-top: 45vh;
      color: $--font-color;
      font-size: 2em;
      text-shadow: 0 0 5px $--color-gray;
    }
  }
}
</style>
