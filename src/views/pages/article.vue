<template>
  <div class="article_container">
    <direct alive="Work"></direct>

    <div class="show">
      <div v-for="(item, index) in article_data" :key="index" class="single">
        <div
          class="inner"
          v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"
        ></div>

        <div class="inner_word">
          <div class="title">
            <span>{{ item.title }}</span>
          </div>
          <div class="time">{{ item.time }}</div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/pages/direct.vue";

export default {
  name: "article",

  components: {
    direct
  },

  data() {
    return {
      article_data: [
        {
          image: "https://i.cssj.fun/usr/hugo/2020/01/%E9%9B%AA.jpg",
          time: "2020-01-10",
          title: "一次失败的购物日记",
          text: "新的一年却没有新的气象"
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/11/250354228.png",
          time: "2019-12-13",
          title: "再次折腾Gridea",
          text: "关于Gridea之前刚问世的时间研究了一下，那时候还不怎么完善..."
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/09/4198740634.jpg",
          time: "2019-11-28",
          title: "博客搬家记",
          text: "自从 Typecho 换到hugo后就将博客放到 腾讯云开发者平台也就是"
        },
        {
          image:
            "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png",
          time: "2019-11-21",
          title: "当了一次小偷",
          text: "今天，莫名的当了一次小偷。起因呢"
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          time: "2019-11-11",
          title: "双十一剁手",
          text:
            "入冬第四天，感觉温度降的好快，上星期还穿着夹克，这星期就换上了棉衣。 ..."
        },
        {
          image: "https://i.cssj.fun/usr/hugo/2020/01/%E9%9B%AA.jpg",
          time: "2020-01-10",
          title: "一次失败的购物日记",
          text: "新的一年却没有新的气象"
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/11/250354228.png",
          time: "2019-12-13",
          title: "再次折腾Gridea",
          text: "关于Gridea之前刚问世的时间研究了一下，那时候还不怎么完善..."
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/09/4198740634.jpg",
          time: "2019-11-28",
          title: "博客搬家记",
          text: "自从 Typecho 换到hugo后就将博客放到 腾讯云开发者平台也就是"
        },
        {
          image:
            "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png",
          time: "2019-11-21",
          title: "当了一次小偷",
          text: "今天，莫名的当了一次小偷。起因呢"
        },
        {
          image: "https://i.cssj.fun/usr/uploads/2018/08/1447571381.jpg",
          time: "2019-11-11",
          title: "双十一剁手",
          text:
            "入冬第四天，感觉温度降的好快，上星期还穿着夹克，这星期就换上了棉衣。 ..."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.article_container {
  // background: #065f65;
  min-height: 100vh;
  width: 100vw;
  display: flex;

  .show {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    padding-top: 10vh;
    box-sizing: border-box;

    .single {
      width: 300px;
      height: 500px;
      border-radius: 10px;
      border: 2px solid #575757;
      padding: 5px;
      margin: 5px 5px;
      box-sizing: border-box;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }

      .inner {
        background-size: cover;
        border-radius: 10px;
        width: 100%;
        height: 350px;
      }

      .inner_word {
        height: 120px;
        margin-top: 10px;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        // background: green;
        .title {
          font-size: 24px;
          height: 100%;
        }
        .time {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .text {
          height: 100%;
        }
      }
    }
  }
}

.long {
  height: 200px;
}

.short {
  height: 150px;
}
</style>
