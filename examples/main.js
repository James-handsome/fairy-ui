import Vue from 'vue'
import App from './App.vue'
import router from './router'


import fairyUi from '../packages/index'
import '../packages/styles/index.less'

Vue.use(fairyUi);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
