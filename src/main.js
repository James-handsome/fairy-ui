/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from './router'

import "../components/styles/index.less";
import fairyUi from "../components/lib/index";

Vue.use(fairyUi);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
