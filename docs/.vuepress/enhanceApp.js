import fairyUi  from '../../packages/lib/index.js'

import '../../packages/styles/index.less'

import './common.less';


export default async ({
  Vue
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
