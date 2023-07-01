import Vue from 'vue'
// 首页面
// import App from './App.vue'
// import App from './App01(匿名插槽).vue'
// import App from './App02(具名插槽).vue'
import App from './App03(作用域插槽).vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
