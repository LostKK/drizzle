<template>
  <div class="rain_container bg_position">
    <div class="rain-options">
      <div
        v-for="(item, index) in rainBtns"
        :key="index"
        class="option-child"
        @click="startMusic(index, item.active)"
      >
        <img :src="item.on" v-show="!item.active" />
        <img :src="item.off" v-show="item.active" />
        <audio :ref="`music${index}`" class="music" loop="loop" preload="auto">
          <source type="audio/mpeg" :src="item.music" />
        </audio>
      </div>
    </div>

    <transition name="fade">
      <div class="rain-poet" v-show="poetShow">
        <div v-for="(item, index) in poet" :key="index" class="poet-child">
          <span>{{ item }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "rain",

  mounted() {
    this.$nextTick(() => {
      //判断访问终端
      var browser = {
        versions: (function() {
          var u = navigator.userAgent;
          return {
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, //android终端
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf("MicroMessenger") > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/sQQ/i) == " qq" //是否QQ
          };
        })(),
        language: (
          navigator.browserLanguage || navigator.language
        ).toLowerCase()
      };
      // chrome 66 禁止audio的自动播放
      !browser.versions.webKit && this.startMusic(0, true);
      !browser.versions.webKit && this.startMusic(4, true);
      browser.versions.mobile && this.startMusic(0, true);
      browser.versions.mobile && this.startMusic(4, true);
      setTimeout(() => {
        this.poetShow = true;
      }, 3000);
      setTimeout(() => {
        this.poetShow = false;
      }, 15000);
    });
  },

  data() {
    return {
      rainBtns: [
        {
          on: require("@/assets/picture/rain/rain_light_white.png"),
          off: require("@/assets/picture/rain/rain_light_black.png"),
          music: require("@/assets/voice/drizzle.mp3"),
          active: "false"
        },
        {
          on: require("@/assets/picture/rain/rain_heavy_white.png"),
          off: require("@/assets/picture/rain/rain_heavy_black.png"),
          music: require("@/assets/voice/heavy_rain.mp3"),
          active: "false"
        },
        {
          on: require("@/assets/picture/rain/rain_thunder_white.png"),
          off: require("@/assets/picture/rain/rain_thunder_black.png"),
          music: require("@/assets/voice/thunder.mp3"),
          active: "false"
        },
        {
          on: require("@/assets/picture/rain/bird_white.png"),
          off: require("@/assets/picture/rain/bird_black.png"),
          music: require("@/assets/voice/bird.mp3"),
          active: "false"
        },
        {
          on: require("@/assets/picture/rain/music_white.png"),
          off: require("@/assets/picture/rain/music_black.png"),
          music: require("@/assets/voice/aRainyMorning.mp3"),
          active: "false"
        },
        {
          on: require("@/assets/picture/rain/music_white.png"),
          off: require("@/assets/picture/rain/music_black.png"),
          music: require("@/assets/voice/white.mp3"),
          active: "false"
        }
      ],
      poet: [
        "那年夏天的雷阵雨",
        "不期而至，酣畅淋漓",
        "遇见了",
        "要好好欣赏",
        "",
        "鸣神の",
        "少しとよみて",
        "さし昙り 雨も降らんか",
        "君を留めん"
      ],
      poetShow: false
    };
  },

  methods: {
    startMusic(type, active) {
      this.$set(this.rainBtns[type], "active", !active);
      if (type === 5) {
        this.$set(this.rainBtns[4], "active", true);
        this.$refs[`music4`][0].pause();
        this.$refs[`music5`][0].play();
      } else if (type === 4) {
        this.$set(this.rainBtns[5], "active", true);
        this.$refs[`music5`][0].pause();
        this.$refs[`music4`][0].play();
      } else {
        active && this.$refs[`music${type}`][0].play();
        !active && this.$refs[`music${type}`][0].pause();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.rain_container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-image: url("../../assets/img/rain.gif");
  background-size: cover;
  .rain-options {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    bottom: 10px;
    right: 10px;
    .option-child {
      margin: 0 5px;
      img {
        height: 30px;
        width: 30px;
        cursor: pointer;
      }
    }
  }

  .rain-poet {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 30%;
    .poet-child {
      display: flex;
      justify-content: center;
      font-family: PingFang SC;
      font-size: 1.2rem;
      color: #ffffff;
      letter-spacing: 3px;
      line-height: 2rem;
      text-shadow: 5px 5px 5px #000000;
    }
  }
}

.bg_position {
  background-position: center center;
}

@media screen and (max-width: 768px) {
  .bg_position {
    background-position: 80% center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
