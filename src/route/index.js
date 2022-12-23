import { createRouter, createWebHashHistory } from "vue-router";
import Layouts from "../layouts/Layouts.vue";
import Home from "../pages/Home.vue";
import Todo from "../pages/TodoApps.vue";
import Excercise1 from "../pages/Exercise1.vue";
import Excercise2 from "../pages/Excercise2.vue";

const routes = [
  {
    path: "/",
    name: "overview",
    component: Layouts,
    children: [
      {
        path: "home",
        name: "HomePage",
        component: Home,
      },
      {
        path: "todo",
        name: "TodoPage",
        component: Todo,
      },
      {
        path: "exercise1",
        name: "Exercise1Page",
        component: Excercise1,
      },
      {
        path: "exercise2",
        name: "Exercise2Page",
        component: Excercise2,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
