// 为组件提供 install 方法，供组件对外按需引入
import SrButton from './src/button'
SrButton.install = Vue => {
  Vue.component(SrButton.name, SrButton)
}
export default SrButton
