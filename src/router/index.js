import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomePage"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "showTodos",
    path: "/show-todos",
    component: () => import("@/views/ShowTodos"),
    meta: {
      title: "Show Todos",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
