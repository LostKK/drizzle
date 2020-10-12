<template>
  <div class="word_container" @click="refresh">
    <!-- <span>" 在不同的遭遇里我发现你的瞬间，有种不可言说的温柔直觉 "</span> -->
    <span>" {{ word }} "</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "word",

  data() {
    return {
      word: ""
    };
  },

  mounted() {
    this.randomCall();
  },

  methods: {
    refresh() {
      this.randomCall();
    },

    randomCall() {
      //随机调用以下一个方法
      const num = Math.floor(Math.random() * 10 + 1);
      if (num === 1 || num === 2 || num === 3) {
        this.yiYan();
      } else if (num === 4 || num === 5 || num === 6) {
        this.poetry();
      } else if (num === 7 || num === 8 || num === 9) {
        this.one();
      } else {
        this.word = "在不同的遭遇里我发现你的瞬间，有种不可言说的温柔直觉";
      }
    },

    yiYan() {
      //调用一言API获取句子
      var url = "https://api.uixsj.cn/hitokoto/get?type=hitokoto&code=json";
      axios({
        methods: "get",
        url: url
      }).then(res => {
        this.word = res.data.content;
      });
    },

    poetry() {
      //调用古诗词API获取句子
      var url = "https://v1.jinrishici.com/all.json";
      axios({
        methods: "get",
        url: url
      }).then(res => {
        this.word = res.data.content;
      });
    },

    one() {
      //调用one 一句 获取句子
      var url = "https://api.xygeng.cn/one";
      axios({
        methods: "get",
        url: url
      }).then(res => {
        this.word = res.data.data.content;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.word_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  color: #ffffff;
  font-size: 3vh;
}
</style>
