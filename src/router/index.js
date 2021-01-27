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
    component: () => import("@/views/collect/collect.vue"),
    children: [
      {
        path: "/",
        name: "collectIndex",
        component: () => import("@/views/collect/collectIndex.vue")
      },
      {
        path: "/snow",
        name: "snow",
        component: () => import("@/views/collect/snow.vue")
      },
      {
        path: "/she",
        name: "she",
        component: () => import("@/views/collect/she.vue")
      },
      {
        path: "/wish",
        name: "wish",
        component: () => import("@/views/collect/wish.vue")
      },
      {
        path: "/rain",
        name: "rain",
        component: () => import("@/views/collect/rain.vue")
      },
      {
        path: "/learn",
        name: "learn",
        component: () => import("@/views/collect/learn.vue")
      },
      {
        path: "/film",
        name: "film",
        component: () => import("@/views/collect/film.vue")
      }
    ]
  },
  {
    path: "/about2",
    name: "about2",
    component: () => import("@/views/pages/about2.vue")
  },

  {
    path: "/edit",
    name: "edit",
    component: () => import("@/views/pages/edit.vue")
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
