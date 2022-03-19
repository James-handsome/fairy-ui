import Vue from "vue";
import App from "./App.vue";

import "../components/css/card.less";
import Card from "../components/lib/card/index";

Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
