/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from './router'

import "../packages/styles/index.less";
import fairyUi from "../packages/index";

Vue.use(fairyUi);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
