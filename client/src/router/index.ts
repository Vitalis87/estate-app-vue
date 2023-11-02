import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../views/Home.vue";

const routes = [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue")
          },
          {
            path: "/sign-in",
            name: "sign-in",
            component: () => import("../views/SignIn.vue")
          },
      ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
