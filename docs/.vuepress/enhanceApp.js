import fairyUi  from '../../components/lib/index.js'

import '../../components/styles/index.less'

import './common.less';


export default async ({
  Vue
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
