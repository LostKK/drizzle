<template>
  <div class="d-flex z-0 main">
    <direct alive="Home"></direct>
    <div class="word">
      <word></word>
    </div>
    <div class="line">
      <lines></lines>
    </div>
  </div>
</template>

<script>
import direct from "@/views/pages/direct.vue";
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

  .line {
    position: fixed;
    width: 100%;
    bottom: 10vh;
  }
}
</style>
