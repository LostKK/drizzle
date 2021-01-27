<template>
  <div class="d-flex z-0 main">
    <direct alive="Home"></direct>
    <div class="word">
      <word></word>
    </div>
    <div class="icon">
      <div class="icon_image"></div>
    </div>
    <div class="line">
      <lines></lines>
    </div>
  </div>
</template>

<script>
import direct from "@/views/component/direct.vue";
import word from "@/views/component/word.vue";
import lines from "@/views/component/line.vue";

export default {
  name: "home",

  components: {
    direct,
    word,
    lines
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/img/green.jpg");
  background-size: 1920px 1080px;
  background-position: center center;

  .word {
    position: relative;
    width: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
  }

  .icon {
    height: 200px;
    width: 100%;
    .icon_image {
      height: 100%;
      background: url("../../assets/img/main_icon.png") no-repeat;
      background-size: 320px;
      background-position: center center;
    }
  }

  .line {
    position: absolute;
    width: 100%;
    bottom: 10vh;
  }
}
</style>
