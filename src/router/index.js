import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import UsersView from "../views/UsersView.vue";
import headers from '../utils/headers';
import EditView from '../views/EditView.vue';
import api from "../api";

Vue.use(VueRouter);

const AdminAuth = (to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    api.post("/validate", {}, headers.reqToken)
      .then(() => {
        next();
      }).catch((err) => {
        console.log(err);
        next("/login");
      });
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
    beforeEnter: AdminAuth,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditView,
    beforeEnter: AdminAuth,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
