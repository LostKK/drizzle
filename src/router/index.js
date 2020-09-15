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
    path: "/article",
    name: "article",
    component: () => import("@/views/pages/article.vue")
  },
  {
    path: "/story",
    name: "story",
    component: () => import("@/views/pages/story.vue")
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
