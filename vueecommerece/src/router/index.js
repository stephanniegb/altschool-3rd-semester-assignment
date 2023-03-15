import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import LogIn from "@/pages/LogIn.vue";
import SignUp from "@/pages/SignUp.vue";
import NotFound from "./NotFound.vue";
import Dashboard from "@/layout/Dashboard.vue";
import ProductView from "@/pages/ProductView.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
      },
      {
        path: "/products",
        name: "ProductsPage",
        component: ProductsPage,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/products/:id",
        name: "ProductView",
        component: ProductView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/login",
        name: "LogIn",
        component: LogIn,
      },
      { path: "/signup", name: "SignUp", component: SignUp },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
      },
    ],
  },
  // {
  //   path: "/login",
  //   name: "LogIn",
  //   component: LogIn,
  // },
  // {

  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: NotFound,
  // },
];

const router = createRouter({ history: createWebHistory(), routes });

const isAuthenticated = () => !!localStorage.getItem("loggedInToken");
const canUserAccess = (to, name) => {
  if (!isAuthenticated() && to.meta.requiresAuth && to.name === name) {
    return false;
  }
  return true;
};
router.beforeEach(async (to) => {
  const canAccess = canUserAccess(to, "ProductsPage");
  const canAccess2 = canUserAccess(to, "ProductView");
  if (!canAccess || !canAccess2) {
    return {
      name: "LogIn",
    };
  }

  if (
    (to.name === "LogIn" && isAuthenticated()) ||
    (to.name === "SignUp" && isAuthenticated())
  ) {
    return {
      name: "LandingPage",
    };
  }
});
export default router;
