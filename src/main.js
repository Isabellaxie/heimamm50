//导入vue
import Vue from 'vue'
//导入app
import App from './App.vue'
//导入路由
import router from './router/router.js'

//导入element-ui
import ElementUI from 'element-ui'
//导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
//引入全局样式
// import './style/base.css'
//引入UI
Vue.use(ElementUI);


new Vue({
  //挂载到vue示例上
  router,
 
  render: h => h(App),
}).$mount('#app')
