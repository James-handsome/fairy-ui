
import './common.less';
import '../../lib/fairyUi.css'
import fairyUi from '../../lib/fairyUi.umd.js'

export default ({
  Vue,
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
