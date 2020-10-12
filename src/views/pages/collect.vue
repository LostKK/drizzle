<template>
  <div class="collect_container">
    <direct alive="Collect"></direct>

    <div class="page flex_direct">
      <div class="left the_top the_width">
        <div class="num">
          <span>5/7</span>
        </div>
        <div class="name"><span>练习册</span></div>
        <div class="text">
          <span
            >“文字设计具有双重性：首先，设计作品要具备功能性；其次，它也应具备艺术审美性”</span
          >
        </div>
        <div class="detail">
          <span @click="goDetail">详情</span>
        </div>
      </div>
      <div class="right the_top the_width" @click="goDetail">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/pages/direct.vue";

export default {
  name: "collect",

  components: {
    direct
  },

  data() {
    return {};
  },

  methods: {
    goDetail() {
      this.$router.push({ name: "snow" });
    }
  }
};
</script>

<style lang="scss" scoped>
.collect_container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  .page {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 10vh;
    .left {
      // min-width: 360px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 20px;
      box-sizing: border-box;
      .num {
        color: #dbe1e6;
        font-size: 30px;
        letter-spacing: 3px;
        font-weight: 600;
      }
      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1b1d1f;
        font-size: 80px;
        font-weight: bold;
        height: 150px;
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1b1d1f;
        font-size: 16px;
        font-weight: 400;
        height: 100px;
      }
      .detail {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 100px;
        border-radius: 50px;
        background: #a6b2ba;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .right {
      background: blue;
      height: 50vh;
      width: 40%;
      border-radius: 10px;
    }
  }
}

.flex_direct {
  flex-direction: row;
}

.the_top {
  margin-top: 100px;
}

.the_width {
  width: 40%;
}

@media screen and (max-width: 768px) {
  .flex_direct {
    flex-direction: column;
  }

  .the_top {
    margin-top: 20px;
  }

  .the_width {
    width: 100%;
  }
}
</style>
