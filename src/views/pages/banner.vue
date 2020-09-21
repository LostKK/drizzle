<template>
  <div class="banner_container" id="container">
    <!-- <div class="bg back"><h1></h1></div> -->
    <el-carousel style="width:100%;" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item, index) in list" :key="index">
        <div class="banner_image">
          <img
            src="@/assets/img/mountain.png"
            ref="bannerHeight"
            @load="imgload"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "banner",

  data() {
    return {
      bannerHeight: "",
      list: [
        {
          url: "@/assets/img/mountain.png"
        },
        {
          url: "@/assets/img/light.jpg"
        }
      ]
    };
  },

  methods: {
    imgload() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";

.banner_container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.banner_image {
  img {
    height: 80vh;
    width: 100%;
  }
}
</style>
