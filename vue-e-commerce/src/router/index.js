import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import NewIn from "../views/NewIn.vue";
import Categories from "../views/Categories.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new-in",
    name: "NewIn",
    component: NewIn,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
