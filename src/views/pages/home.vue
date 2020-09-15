<template>
  <div class="d-flex z-0 main">
    <div class="banner">
      <banner />
    </div>

    <div class="direct">
      <direct></direct>
    </div>
  </div>
</template>

<script>
import banner from "@/views/pages/banner.vue";
import direct from "@/views/pages/direct.vue";

export default {
  name: "home",

  components: {
    banner,
    direct
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;

  .banner {
    height: 100vh;
    width: 100vw;
  }

  .direct {
    position: absolute;
    top: 5vh;
    right: 5vw;
    z-index: 3;
  }
}
</style>
