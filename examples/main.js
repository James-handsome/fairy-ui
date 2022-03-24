import Vue from "vue";
import App from "./App.vue";

import "../components/styles/index.less";
import fairyUi from "../components/lib/index";

Vue.use(fairyUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
