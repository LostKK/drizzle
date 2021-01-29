<template>
  <div class="film_container">
    <direct alive="About" bgColor="white"></direct>

    <div class="box">
      <div class="item">
        <img :src="img04" />
      </div>
      <div class="item">
        <img :src="img01" />
      </div>
      <div class="item">
        <img :src="img02" />
      </div>
      <div class="item">
        <img :src="img03" />
      </div>
      <div class="item">
        <img :src="img02" />
      </div>
      <div class="item">
        <img :src="img03" />
      </div>
      <div class="item">
        <img :src="img03" />
      </div>
      <div class="item">
        <img :src="img02" />
      </div>
      <div class="item">
        <img :src="img04" />
      </div>
      <div class="item">
        <img :src="img02" />
      </div>
      <div class="item">
        <img :src="img01" />
      </div>
      <div class="item">
        <img :src="img04" />
      </div>
      <div class="item">
        <img :src="img03" />
      </div>
      <div class="item">
        <img :src="img02" />
      </div>
      <div class="item">
        <img :src="img01" />
      </div>
      <div class="item">
        <img :src="img04" />
      </div>
      <div class="item">
        <img :src="img01" />
      </div>
      <div class="item">
        <img :src="img04" />
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/component/direct.vue";

export default {
  name: "film",

  components: {
    direct
  },

  data() {
    return {
      img01: require("@/assets/img/kiss.jpg"),
      img02: require("@/assets/img/green.jpg"),
      img03: require("@/assets/img/daybreak.png"),
      img04: require("@/assets/img/deer.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.film_container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
}
.box {
  margin: 10px;
  column-count: 3;
  column-gap: 10px;
  z-index: 8;
  padding-top: 10vh;
}
.item {
  margin-bottom: 10px;
}
.item img {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 768px) {
  .box {
    column-count: 3;
  }
}

@media screen and (min-width: 992px) {
  .box {
    column-count: 4;
  }
}

@media screen and (min-width: 1200px) {
  .box {
    column-count: 5;
  }
}
</style>
