<template>
  <div class="workDetail_container">
    <direct alive="Collect" bgColor="white"></direct>

    <div
      class="up"
      v-bind:style="{ backgroundImage: 'url(' + article.image + ')' }"
    >
      <div class="up_inner">
        <div class="title">{{ article.title }}</div>
        <div class="time">{{ article.time }}</div>
      </div>
    </div>
    <div class="down">
      <div class="down_inner">
        <div v-html="article.detail" class="context"></div>
      </div>
    </div>
  </div>
</template>

<script>
import direct from "@/views/pages/direct.vue";

export default {
  name: "workDetail",

  components: {
    direct
  },

  mounted() {
    if (this.$route.query.id) {
      const articleList = this.article_data.filter(item => {
        return item.id === this.$route.query.id;
      });
      this.article = articleList[0];
    }
  },

  data() {
    return {
      article: "",
      article_data: [
        {
          id: "1",
          title: "一次失败的购物日记",
          time: "2020-01-10",
          // eslint-disable-next-line no-useless-escape
          detail: `<h3><strong style=\"color: rgb(83, 187, 244);\">新的一年却没有新的气象</strong></h3><p><br></p><p>一眨眼2020年又过去十天，离2021年还省355天了。</p><p><br></p><p>上周六的时候本来计划周日和媳妇去趟服装城，毕竟从生了果然以后，今年一年都在家带娃，没怎么出来过，更别说购物了。为此星期六把丈母娘接过来让星期日帮忙看一天果然，我俩出去浪一浪。然而运气着实有点差，周六下午的时候看到微信里有公众号推送说周日会有强降雪，按照以往天气预报的准确率，我觉得十有八九是不准的，即使下也就是个毛毛雪而已，所以也就没当回事，还定了个第二天早上六点半的闹钟，<u>这是因为某人除了赖床外，化妆需要一个多小时，穿衣服需要半个小时，再加上照镜子，弄头发等乱七八糟的，起码需要2个小时才能出门。</u>&nbsp;可没成想这次预报很准啊。早上起来的因为六点半天还黑着呢，我也没注意，等到七点多天亮了一点后发现：卧槽，白茫茫的一片啊，车顶上都落满了厚厚的一层雪。而且雪还没停，一直在往下飘。</p><p><br></p><p>经过我的技术研究《雪天如何正确的开车》并且和媳妇开了个小会讨论了一下《关于暴雪天到服装城买衣服的可行性方案》，最后结论是，先试行一下吧，到路上视情况而定，毕竟这次机会是来之不易的，不能轻易放弃。在热了半小时车以后，我们上路了，路上的车都很安分，我也不敢造次，慢慢走吧。但是在准备上大路的时候我虚了，因为在车里都看不到路的边界在哪里。我下车看了看，一片雪白，而且还有雾，能见度也不好，最终还是打道回府了。</p><p><br></p><p>周日下了一整天，星期一也没法开车，早上坐公交走的，星期二早上起来又在下，雪地里等了一个小时后，等到的消息是公交车也停运了，爽歪歪。后来联系出租，按人头计价50/人，那我这来回一趟需要100块钱。索性打电话和领导请了个假，今天不去了。</p><p><br></p><h3><strong>心有所思，事有所成</strong></h3><p><br></p><p>好几年没下过这么大的雪了，这次的雪下的的确很大，好多地方雪被车轮一压，然后冻了，路上很滑很滑。昨天晚上从超市买了些鸡蛋，在出了超市以后我还在想，万一不小心摔倒，我是保身体呢还是保鸡蛋呢？我也不知道。</p><p><br></p><p>是的，在走了估计一百多米后，我真的摔倒了，没给我丝毫反应的机会，先是膝盖着的地，然后是胳膊肘，装鸡蛋袋子在手里抓的，没接触到地面，另一只手里提的一盒饼干，最后盒子的手把还在我手里抓的，盒子却被惯性甩了有大概三米远。关于刚才保身体还是保鸡蛋的那个问题，我的下意识的反应，给了我答案。<strong style=\"color: rgb(83, 187, 244);\">还真是心想事成啊？</strong></p><p><br></p><p>到现在，膝盖还在隐隐作痛。</p><p><br></p><p><a href=\"https://i.cssj.fun/usr/hugo/2020/01/%E9%9B%AA.jpg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(83, 187, 244);\"><img src=\"https://i.cssj.fun/usr/hugo/2020/01/%E9%9B%AA.jpg\" alt=\"2020年的第一场雪\" width=\"668\" style=\"cursor: nesw-resize;\"></a></p><p><br></p><p>下雪后的景色确实很美...</p>`,
          image: "https://i.cssj.fun/usr/hugo/2020/01/%E9%9B%AA.jpg"
        },
        {
          id: "2",
          image: "https://i.cssj.fun/usr/uploads/2018/11/250354228.png",
          time: "2019-12-13",
          title: "再次折腾Gridea",
          detail: `<h3><strong>关于Gridea</strong></h3><p><br></p><p>之前刚问世的时间研究了一下，那时候还不怎么完善，功能也不多，当时觉得没什么新意就又卸载了。最近发现好多人都在推荐，看了一下发现版本更新好快的，而且马上要支持托管到FTP空间。今天又下载下来体验了一下，确实比之前爽歪歪。而且操作界面也挺漂亮，比较差的一点是可选的主题不多，Ggithub找了一番，发现一个比较不错的。<a href="https://i.immmmm.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(83, 187, 244);">林沐沐</a>，看起来高端大气，就是有点花哨，然后噱微的进行了一点点的修改。</p><p><br></p><ol><li>文章页文字太大了，我还是喜欢小一点。</li><li>首页背景太花，朴素一点，样式稍微调了调。</li><li>标题字色换成骚红，风格传统不能破。</li><li>首页底部标签云和关于我删掉了。</li><li>评论系统换成了代理Disqus，简单粗暴。</li><li>底部版权不能丢，那就加个名字把，尝试加了一言，发现不美观，删掉了。</li></ol><p><br></p><h3><strong>最后</strong></h3><ul><li>感谢 Gridea ！</li><li>感谢林沐沐！</li><li>我的<a href="http://github.cssj.fun/" rel="noopener noreferrer" target="_blank" style="color: rgb(83, 187, 244);">Gridea博客</a>放到Github了，速度略慢！</li><li>其实这是一遍水文！</li></ul><p><br></p>`
        },
        {
          id: "4",
          image:
            "https://i.cssj.fun/usr/uploads/2019/08/le-creuset-m4ChAAL8E98-unsplash.png",
          time: "2019-11-21",
          title: "当了一次小偷",
          detail: `<p><span style="color: rgb(48, 49, 51);">成年人的世界没有容易二字。</span></p>`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.workDetail_container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  // align-content: center;
  .up {
    height: 450px;
    display: flex;
    background-size: cover;
    width: 100%;
    background-position: center center;
    .up_inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      .title {
        width: 100%;
        height: 50px;
        padding-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 35px;
      }
      .time {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 20px;
      }
    }
  }
  .down {
    width: 100%;
    // height: 1000px;
    display: flex;
    justify-content: center;
    .down_inner {
      padding: 10vw;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        width: 100%;
        overflow: hidden;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
