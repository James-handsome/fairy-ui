import Vue from "vue";
import App from "./App.vue";

import "../components/styles/index.less";
import Card from "../components/lib/card";

Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
