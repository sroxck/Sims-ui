import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// 引入组件库
import Sui from './../components/'
// 注册组件库
Vue.use(Sui)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
