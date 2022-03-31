import fairyUi  from '../../packages/index.js'

import '../../packages/styles/index.less'

import './common.less';


export default async ({
  Vue
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
