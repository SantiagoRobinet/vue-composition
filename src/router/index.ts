import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/characters",
      name: "characters",
      component: () => import("../pages/CharactersPage.vue"),
    },
  ],
});

export default router;
