import Vue from 'vue'
import App from './App.vue'
import router from './router'


import fairyUi from '../packages/styles/index.less'
import '../packages'

Vue.use(fairyUi);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
