<template>
  <div class="about_container">
    <direct alive="About" bgColor="white"></direct>

    <div class="first_page flex_direct">
      <div class="left left_width">
        <el-timeline>
          <el-timeline-item timestamp="2020/06 - 至今" placement="top">
            <el-card
              ><h4>广州摘星者信息科技有限公司</h4>
              <p>
                在摘星者主要负责的是Mr.wish的web端与h5端的前端开发工作，学会了更多的手段去完善前端开发，优化交互思想
              </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/03 - 2020/05" placement="top">
            <el-card
              ><h4>深圳联友科技有限公司</h4>
              <p>
                联友是我第一份工作，主要参与“东风乘用车”项目前端开发，很感谢联友在职场专业化成长上给予的空间
              </p>
            </el-card>
          </el-timeline-item>

          <el-timeline-item timestamp="2015 - 2019" placement="top">
            <el-card>
              <h4>南华大学</h4>
              <p>
                大学的专业是软件工程，在学校里主要以Java语言为基础进行开发学习
              </p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <div class="right">
        <div class="head"></div>
        <div class="myword">
          <span>在不同的遭遇里我发现你的瞬间，有种不可言说的温柔直觉</span>
        </div>
        <div class="myword">
          <span>你好</span>
        </div>
        <div class="myword">
          <span>我叫KK</span>
        </div>
        <div class="myword">
          <span>一个</span>
        </div>
        <div class="myword">
          <span>在广州的前端工程师</span>
        </div>
        <div class="myword">
          <span>(´-ω-`)</span>
        </div>

        <div class="onBottom mrtop">
          <div class="icon">
            <div class="icon_size bg_git" @click="toGit"></div>

            <el-popover placement="top-start" trigger="hover">
              <img style="width:20vh;" src="../../assets/img/mywechat.jpg" />
              <template slot="reference">
                <div class="icon_size bg_wechat"></div
              ></template>
            </el-popover>

            <el-popover placement="top-start" trigger="hover">
              <img
                style="width:20vh;max-width:80vw;height:auto;"
                src="../../assets/img/myQQ.png"
              />
              <template slot="reference">
                <div class="icon_size bg_qq"></div>
              </template>
            </el-popover>

            <el-popover placement="top-start" trigger="hover">
              <div style="display:flex;">
                <span>13432263213</span>
              </div>
              <template slot="reference">
                <div class="icon_size bg_phone"></div>
              </template>
            </el-popover>
          </div>
          <div class="right">
            <span>©2020 captain KK All rights reserved </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/component/direct.vue";

export default {
  name: "about",

  components: {
    direct
  },

  methods: {
    toGit() {
      location.href = "https://github.com/LostKK";
    }
  }
};
</script>

<style lang="scss" scoped>
$me: "../../assets/img/kiss.jpg";

.about_container {
  display: flex;
  flex-direction: column;
  min-height: 540px !important;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;

  .first_page {
    display: flex;
    height: 100%;
    width: 100%;
    padding-top: 10vh;
    .left {
      // height: 100%;
    }
    .right {
      // background: #51975b;
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
        text-align: center;
      }
      .head {
        margin-bottom: 20px;
        background-image: url($me);
        background-position: 100% 20%;
        background-size: cover;
        width: 150px;
        height: 150px;
        min-height: 150px;
        border-radius: 50%;
      }
      .double {
        display: flex;
        flex-direction: row;
        width: 100%;
        .single {
          width: 100%;
          margin-top: 15px;
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
      .onBottom {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;

        .icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          height: 30px;
        }
        .right {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #acacac;
          font-size: 14px;
          height: 30px;
        }
      }
    }
  }
}

.flex_direct {
  flex-direction: row;
}

.mrtop {
  margin-top: 30px;
}

.left_width {
  width: 70%;
}

@media screen and (max-width: 768px) {
  .flex_direct {
    flex-direction: column;
  }

  .mrtop {
    margin-top: 100px;
  }

  .left_width {
    width: 90%;
  }
}

.icon_size {
  margin: 0 10px 0 10px;
  width: 30px;
  height: 30px;
  background-size: 60px 60px;
  background-image: url("../../assets/img/css_sprites.png");
}
.bg_git {
  background-position: 0% 0%;
}
.bg_wechat {
  background-position: 100% 0%;
}
.bg_qq {
  background-position: 100% 100%;
}
.bg_phone {
  background-position: 0% 100%;
}
</style>
