<template>
  <div class="collect_container">
    <direct alive="Collect" bgColor="white"></direct>

    <div class="slide-banner">
      <div class="banner-wrapper">
        <div class="slide-banner-wrapper" ref="slide">
          <div class="slide-banner-content">
            <div
              v-for="(item, index) in collectList"
              class="slide-page"
              :key="index"
            >
              <CollectSingle
                :dataObj="item"
                :index="index"
                :len="collectList.length"
              />
            </div>
          </div>
        </div>
        <div class="dots-wrapper">
          <span
            class="dot"
            v-for="num in collectList.length"
            :key="num"
            :class="{ active: currentPageIndex === num - 1 }"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/component/direct.vue";
import CollectSingle from "@/views/component/collectSingle.vue";
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide);

export default {
  name: "collect",

  components: {
    direct,
    CollectSingle
  },

  data() {
    return {
      nums: 4,
      currentPageIndex: 0,
      collectList: [
        // {
        //   name: "遗愿清单",
        //   text: "我听闻 人来到世界上是要做很多事情的 我不想白活一辈子",
        //   image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
        //   routeName: "wish"
        // },
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
          name: "2020冒险日记",
          text: "记录这一年时光",
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          routeName: "film"
        },
        {
          name: "大雪下了一整夜",
          text: "人生愿望 遇见一场很大很大的雪",

          image:
            "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png",
          routeName: "snow"
        }
        // {
        //   name: "that girl",
        //   text:
        //     "I could've held your hand But I was young and then I blew every circumstance",
        //   image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
        //   routeName: "she"
        // }
      ]
    };
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.slide.destroy();
  },

  methods: {
    init() {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        slide: true,
        momentum: false,
        bounce: false,
        probeType: 3,
        autoplay: false
      });
      console.log(this.slide);
      this.slide.pausePlay();
      this.slide.on("scrollEnd", this._onScrollEnd);

      this.slide.on("slideWillChange", page => {
        this.currentPageIndex = page.pageX;
      });

      this.slide.on("slidePageChanged", () => {
        // console.log("CurrentPage changed to => ", page);
      });
    },

    _onScrollEnd() {
      console.log("CurrentPage => ", this.slide.getCurrentPage());
    }
  }
};
</script>

<style lang="scss" scoped>
.collect_container {
  height: 100vh;
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

.slide-banner {
  .banner-wrapper {
    position: relative;
  }
  .slide-banner-wrapper {
    min-height: 1px;
    overflow: auto;
  }
  .slide-banner-content {
    height: 100vh;
    font-size: 0;
    .slide-page {
      display: inline-block;
      height: 100vh;
      width: 100%;
      text-align: center;
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
