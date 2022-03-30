import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/button",
    name: "Button",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Button.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
