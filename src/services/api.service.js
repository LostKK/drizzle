import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    if (process.env.NODE_ENV === "production") {
      // Vue.axios.defaults.baseURL = "https://mybox.mrwish.net/";
    } else {
      // Vue.axios.defaults.baseURL = "https://test.mybox.lucky286.cn";
    }
  }
};

export default ApiService;
