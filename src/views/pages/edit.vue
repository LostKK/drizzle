<template>
  <div class="edit_container">
    <div class="record">
      <div class="add">
        <img src="../../assets/img/add.png" />
        <div>新增文章</div>
      </div>

      <div class="middle">
        <div v-for="(item, index) in draft" :key="index">
          <div class="draft">
            <img src="../../assets/img/draft_not.png" v-if="item.isSave" />
            <img src="../../assets/img/draft_success.png" v-else />
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="btn" @click="goBack">返回</div>
      </div>
    </div>
    <div class="editor">
      <quill ref="context"></quill>
    </div>
  </div>
</template>

<script>
import quill from "@/views/component/quill.vue";

export default {
  name: "edit",

  components: {
    quill
  },

  data() {
    return {
      context: "<p></p>",

      draft: [
        {
          image: "https://i.cssj.fun/usr/hugo/2020/01/%E9%9B%AA.jpg",
          time: "2020-01-10",
          title: "一次失败的购物日记",
          text: "新的一年却没有新的气象",
          isSave: false
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/11/250354228.png",
          time: "2019-12-13",
          title: "再次折腾Gridea",
          text: "关于Gridea之前刚问世的时间研究了一下，那时候还不怎么完善...",
          isSave: true
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/09/4198740634.jpg",
          time: "2019-11-28",
          title: "博客搬家记",
          text: "自从 Typecho 换到hugo后就将博客放到 腾讯云开发者平台也就是",
          isSave: true
        }
      ]
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.edit_container {
  // height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  .record {
    width: 30%;
    display: flex;
    flex-direction: column;
    .add {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 36px;
      padding: 20px;
      border-bottom: solid 1px #bfbfbf;
      img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
    .middle {
      display: flex;
      flex-direction: column;
      .draft {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        padding: 20px;
        border-bottom: solid 1px #bfbfbf;
        img {
          height: 30px;
          width: 25px;
          margin-right: 10px;
        }

        &:hover {
          background: #8a8a8a;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      padding: 20px;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        border-radius: 50px;
        border: solid 1px #bfbfbf;

        &:hover {
          background: #8bc34a;
          color: #ffffff;
        }
      }
    }
  }
  .editor {
    width: 70%;
    height: 100%;
  }
}
</style>
