import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入第三方组件
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// axio请求拦截器 在请求发出前设置一些信息
axios.interceptors.request.use(config => {
  console.log(config)
  // 为请求头对象，添加 Token 验证的 Authorization 字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须return 否则配置不成功
  return config
})
// 将axios挂载在Vue原型对象的$http属性上？发送请求用 this.$http
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 全局注册第三方组件
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
