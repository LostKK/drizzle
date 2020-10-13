import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/pages/home.vue")
  },
  {
    path: "/work",
    name: "work",
    component: () => import("@/views/pages/work.vue")
  },
  {
    path: "/collect",
    name: "collect",
    component: () => import("@/views/pages/collect.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/pages/about.vue")
  },
  {
    path: "/snow",
    name: "snow",
    component: () => import("@/views/collect/snow.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/collect/test.vue")
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("@/views/component/edit.vue")
  },
  {
    path: "/workDetail",
    name: "workDetail",
    component: () => import("@/views/component/workDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
