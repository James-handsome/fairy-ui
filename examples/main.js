import Vue from 'vue'
import App from './App.vue'
import router from './router'


import fairyUi from '../lib/fairyUi.umd'
import '../lib/fairyUi.css' 

Vue.use(fairyUi);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
