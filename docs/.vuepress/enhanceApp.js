
import './common.less';
import '../../lib/fairy-ui.css'
import fairyUi from '../../packages/index.js'

export default async({
  Vue,
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
