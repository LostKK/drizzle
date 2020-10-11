<template>
  <div class="about_container">
    <direct alive="About"> </direct>

    <div v-show="statusShow === 'first'" class="first_page">
      <div class="left"></div>
      <div class="right">
        <div class="myword">
          <span
            >现在的我还是“菜鸟”，固有很多不足需要弥补，我一直深信不疑，有选择的坚持将成就下一个完美；我要不停的进步，因为我不满足，即使我是蜗牛，也要坚信我前进的脚步</span
          >
        </div>
        <div class="head"></div>
        <div class="double">
          <div class="single">
            <div class="title"><span>设备名称</span></div>
            <div class="detail"><span>李泳康</span></div>
          </div>
          <div class="single">
            <div class="title"><span>设备规格</span></div>
            <div class="detail"><span>web前端</span></div>
          </div>
        </div>
        <div class="double">
          <div class="single">
            <div class="title"><span>设备类型</span></div>
            <div class="detail"><span>男同学</span></div>
          </div>
          <div class="single">
            <div class="title"><span>保质期</span></div>
            <div class="detail"><span>待确定</span></div>
          </div>
        </div>
        <div class="double">
          <div class="single">
            <div class="title"><span>运行环境</span></div>
            <div class="detail">
              <span>无论什么样的业务风格我都会去尝试</span>
            </div>
          </div>
        </div>
        <div class="double">
          <div class="single">
            <div class="title"><span>设备特点</span></div>
            <div class="detail">
              <span>坚持不放弃</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="statusShow === 'second'">
      <h1>adhbijsdbhika</h1>
    </div>

    <div v-show="statusShow === 'third'">
      <h1>adhbijsdbhika</h1>
    </div>
  </div>
</template>

<script>
import direct from "@/views/pages/direct.vue";

export default {
  nme: "about",

  components: {
    direct
  },

  data() {
    return {
      statusShow: "first"
    };
  }
};
</script>

<style lang="scss" scoped>
.about_container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  .first_page {
    display: flex;
    flex-direction: row;
    // background: green;
    height: 100%;
    width: 100%;
    padding-top: 10vh;
    .left {
      background: red;
      height: 100%;
      width: 70%;
    }
    .right {
      min-width: 360px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      height: 100%;
      width: 30%;
      .myword {
        color: #989898;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      .head {
        background-image: url("../../assets/img/kk.jpg");
        background-position: 100% 10%;
        background-size: 162px 216px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      .double {
        display: flex;
        flex-direction: row;
        width: 100%;
        .single {
          width: 100%;
          margin-top: 10px;
          margin-left: 15px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 14px;
            background: #49c9b0;
            border-radius: 5px;
            width: 80px;
            height: 30px;
          }
          .detail {
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #a1a1a1;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
