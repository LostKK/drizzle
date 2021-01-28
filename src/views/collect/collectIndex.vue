<template>
  <div class="collect_container">
    <direct alive="Collect" bgColor="white"></direct>

    <div class="page flex_direct">
      <div class="left the_top the_width">
        <div class="num">
          <span>{{ currentIndex }}/{{ collectList.length }}</span>
        </div>
        <div class="name">
          <span>{{ current.name }}</span>
        </div>
        <div class="text">
          <span>" {{ current.text }} "</span>
        </div>
        <div class="detail" @click="goDetail">
          <span>详情</span>
        </div>
      </div>
      <div class="right the_top the_width" @click="goDetail">
        <div
          class="right_inner"
          v-bind:style="{ backgroundImage: 'url(' + current.image + ')' }"
        ></div>
      </div>
    </div>

    <div class="bottom">
      <div class="inner just-start">
        <div class="btn" @click="goBefore">
          <img src="../../assets/img/before.png" />
          <div>上一页</div>
        </div>
      </div>
      <div class="inner just-end">
        <div class="btn" @click="goAfter">
          <div>下一页</div>
          <img src="../../assets/img/after.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/component/direct.vue";

export default {
  name: "collect",

  components: {
    direct
  },

  created() {
    this.current = this.collectList[0];
    this.currentIndex = 1;
  },

  data() {
    return {
      current: "",
      currentIndex: 0,
      collectList: [
        {
          name: "遗愿清单",
          text: "我听闻 人来到世界上是要做很多事情的 我不想白活一辈子",
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          routeName: "wish"
        },
        {
          name: "大雨滂沱",
          text: "多少故事甜在心头",
          image:
            "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png",
          routeName: "rain"
        },
        {
          name: "努力 奋斗！",
          text: "还要赶多少路才能安睡",
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          routeName: "learn"
        },
        {
          name: "钟爱的电影",
          text: "电影在某种程度上延展了我的人生",
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          routeName: "she"
        },
        {
          name: "大雪下了一整夜",
          text: "人生愿望 遇见一场很大很大的雪",

          image:
            "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png",
          routeName: "snow"
        },
        {
          name: "that girl",
          text:
            "I could've held your hand But I was young and then I blew every circumstance",
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          routeName: "she"
        }
      ]
    };
  },

  methods: {
    goDetail() {
      this.$router.push({ name: this.current.routeName });
    },

    goBefore() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.collectList.length;
      } else {
        this.currentIndex--;
      }
      this.current = this.collectList[this.currentIndex - 1];
    },

    goAfter() {
      if (this.currentIndex === this.collectList.length) {
        this.currentIndex = 1;
      } else {
        this.currentIndex++;
      }
      this.current = this.collectList[this.currentIndex - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
.collect_container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .page {
    display: flex;
    justify-content: center;
    // height: 100%;
    width: 100%;
    padding-top: 10vh;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
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
        font-size: 40px;
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
      height: 50vh;
      width: 100%;
      .right_inner {
        background-size: cover;
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }

  .bottom {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 20px;
    .inner {
      width: 100%;
      display: flex;
      .btn {
        display: flex;
        width: 100px;
        flex-direction: row;
        align-items: center;
        img {
          height: 100%;
        }
        div {
          width: 50px;
        }
      }
    }

    .just-start {
      justify-content: flex-start;
    }

    .just-end {
      justify-content: flex-end;
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
