import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入全局样式
import './styles/index.scss'
// 导入动态设置rem基准值
import 'amfe-flexible'
// 注册第三方组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
