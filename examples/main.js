import Vue from "vue";
import App from "./App.vue";

import "../components/styles/index.less";
import Card from "../components/lib/card";
import Button from "../components/lib/button";

Vue.use(Card);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
