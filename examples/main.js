import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../components/css/card.less";
import Card from "../components/lib/card/src/main.vue";

Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
