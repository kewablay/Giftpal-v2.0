import Vue from "vue";
import VueRouter from "vue-router";
import logout from "../pages/logout.vue";
import Home from "../pages/Front/Home";
import Payment from "../pages/Front/Payment";
import Register from "../pages/Front/Register";
import WaitList from "../pages/Front/WaitList";
import Dashboard from "../pages/Admin/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/payment",
    component: Payment,
    name: "payment"
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard"
  },
  {
    path: "/register",
    component: Register,
    name: "register"
  },
  {
    path: "/wait-list",
    component: WaitList,
    name: "WaitList"
  },
  {
    path: "/logout",
    component: logout,
    name: "logout",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/404",
    component: () => import("../pages/errorPage.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
