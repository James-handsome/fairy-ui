
import './common.less';
import '../../lib/fairy-ui.css'
import fairyUi from '../../packages/index'

export default  ({
  Vue,
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
