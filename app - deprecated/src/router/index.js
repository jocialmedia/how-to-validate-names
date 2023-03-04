import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import Languages from "@/views/LanguagesPage.vue";
import TestCases from "@/views/TestCases.vue";
import RegexGenerator from "@/views/RegexGenerator.vue";
import About from "@/views/AboutPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/languages",
    name: "Languages",
    component: Languages,
  },
  {
    path: "/test-cases",
    name: "Test Cases",
    component: TestCases,
  },
  {
    path: "/regex",
    name: "Regex Generator",
    component: RegexGenerator,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;