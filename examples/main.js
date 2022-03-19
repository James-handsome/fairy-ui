import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// less
import "../components/css/card.less";
import Card from "../components/lib/card/index";

Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
