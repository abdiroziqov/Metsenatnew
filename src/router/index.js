import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Application.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../components/TheAuth.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/example",
      name: "example",
      component: () => import("@/views/Example.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/Main.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () =>
            import("@/components/MainComponents/MainDashboard.vue"),
        },
        {
          path: "/sponsor",
          name: "sponsor",
          component: () =>
            import("@/components/MainComponents/MainSponsors.vue"),
        },
        {
          path: "/students",
          name: "students",
          component: () =>
            import("@/components/MainComponents/MainStudents.vue"),
        },
      ],
    },
    {
      path: "/sponsors/single/:id",
      name: "single",
      component: () => import("@/views/SponsorsSingle.vue"),
    },
    {
      path: "/add/student",
      name: "add",
      component: () => import("@/views/AddStudents.vue"),
    },
    {
      path: "/add/student/new",
      name: "new",
      component: () => import("@/views/AddStudentsNew.vue"),
    },
    {
      path: "/sponsors/single",
      name: "sponsorssingle",
      component: () => import("@/components/SponsorsAbout.vue"),
    },

    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
