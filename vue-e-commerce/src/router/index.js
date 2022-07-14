import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import CartComponent from "../views/CartComponent.vue";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
  },
  {
    path: "/cart",
    name: "CartComponent",
    component: CartComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
