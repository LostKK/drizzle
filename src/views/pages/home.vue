<template>
  <div class="d-flex z-0 main">
    <div class="banner">
      <banner />
    </div>

    <div class="direct">
      <direct></direct>
    </div>

    <toHome></toHome>
  </div>
</template>

<script>
import banner from "@/views/pages/banner.vue";
import direct from "@/views/pages/direct.vue";
import toHome from "@/views/pages/toHome.vue";

export default {
  name: "home",

  components: {
    banner,
    direct,
    toHome
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100vh;
  width: 100vw;
}

@media screen and (min-width: 769px) {
  .banner {
    height: 80vh;
    width: 100vw;
    padding: 10vh 5vw 10vh 10vw;
  }

  .direct {
    position: fixed;
    left: 0;
    z-index: 3;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    height: 80vh;
    width: 100vw;
    padding: 10vh 5vw 10vh 5vw;
  }

  .direct {
    display: none;
  }
}
</style>
