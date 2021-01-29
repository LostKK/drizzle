<template>
  <div class="cs_Container diff-direct">
    <div class="text diff-top">
      <div class="text-num space">
        <span>{{ index + 1 }}/{{ len }}</span>
      </div>
      <div class="text-name space">
        <span>{{ dataObj.name }}</span>
      </div>
      <div class="text-word  space">
        <span>" {{ dataObj.text }} "</span>
      </div>
    </div>
    <div class="pic pic-height" @click="goDetail">
      <div
        class="pic-inner"
        :style="{ backgroundImage: 'url(' + dataObj.image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectSingle",

  props: {
    index: {
      type: Number,
      require: true
    },
    len: {
      type: Number,
      require: true
    },
    dataObj: {
      type: Object,
      require: true
    }
  },

  data() {
    return {
      currentIndex: 1,
      name: "大雨滂沱",
      text: "多少故事甜在心头 ",
      image:
        "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png"
    };
  },

  methods: {
    goDetail() {
      this.$router.push({ name: this.dataObj.routeName });
    }
  }
};
</script>

<style lang="scss" scoped>
.cs_Container {
  display: flex;
  justify-content: center;
  width: 100vw;
  width: 100%;
  box-sizing: border-box;
  .text {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
    .text-num {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #dbe1e6;
      font-size: 30px;
      letter-spacing: 3px;
      font-weight: 600;
      width: 100%;
    }
    .text-name {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1b1d1f;
      font-size: 30px;
      font-weight: bold;
      width: 100%;
    }
    .text-word {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1b1d1f;
      font-size: 16px;
      font-weight: 400;
      width: 100%;
    }
  }
  .pic {
    width: 100%;
    .pic-inner {
      background-size: cover;
      background-position: center center;
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }
}

.diff-direct {
  flex-direction: row;
  padding: 10vh 80px 0 20px;
}

.diff-top {
  margin-top: 100px;
  width: 40%;
}

.pic-height {
  height: 80vh;
}

.space {
  margin-bottom: 70px;
}

@media screen and (max-width: 768px) {
  .diff-direct {
    flex-direction: column;
    padding: 10vh 20px 20px;
  }

  .diff-top {
    margin-top: 20px;
    width: 100%;
  }

  .pic-height {
    height: 55vh;
  }

  .space {
    margin-bottom: 10vw;
  }
}
</style>
