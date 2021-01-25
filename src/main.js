import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import mavonEditor from "mavon-editor";

// 自定义样式
import "./styles/main.scss";
import "mavon-editor/dist/css/index.css";

Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
