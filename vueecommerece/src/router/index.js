import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import LogIn from "@/pages/LogIn.vue";
import SignUp from "@/pages/SignUp.vue";
import NotFound from "./NotFound.vue";
import Dashboard from "@/layout/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/landingpage",
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

      }
    ],
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

const isAuthenticated = () => !!localStorage.getItem("loggedInToken");
const canUserAccess = (to) => {
  if (
    !isAuthenticated() &&
    to.meta.requiresAuth &&
    to.name === "ProductsPage"
  ) {
    return false;
  }
  return true;
};
router.beforeEach(async (to) => {
  const canAccess = canUserAccess(to);
  if (!canAccess) {
    return {
      name: "LogIn",
    };
  }

  // if(from.name === 'SignUp' && to.name === 'ProductsPage'){
  //   return {
  //     name: 'ProductsPage'
  //   }
  // }

  if (to.name === "LogIn" && isAuthenticated() || to.name === "SignUp" && isAuthenticated()) {
    return {
      name: "LandingPage",
    };
  }
});
export default router;
