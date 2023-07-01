import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局指令
// Vue.directive('指令名', 指令配置对象)
Vue.directive('bgc', {
  inserted( el,binding ) {
    el.style.backgroundColor = binding.value;
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
