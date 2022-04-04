
import './common.less';
import '../../packages/styles/index.less'
import fairyUi from '../../packages'

export default async ({
  Vue,
}) => {
  if(typeof process === "undefined"){
    Vue.use(fairyUi)
  }
}
