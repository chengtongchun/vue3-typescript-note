import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/search",
    component: () => import("@/views/Search/index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/Register/index.vue"),
  },
  {
    path: "/video/:id/:title",
    component: () => import("@/views/Video/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), //(process.env.BASE_URL),
  routes,
});

export default router;
