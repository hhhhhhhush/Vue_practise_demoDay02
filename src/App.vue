<template>
  <div>
    <h1>我是根组件</h1>
    <button @click="cname='MyLogin'">未登录</button>
    <button @click="cname='MyUser'">已登录</button>
    <!-- 
      1.什么是动态组件：多个组件使用同一个挂载点
      2.动态组件语法
      3.动态组件应用
     -->
     <component :is="cname"></component>
  </div>
</template>

<script>
import MyLogin from './components/MyLogin.vue'
import MyUser from './components/MyUser.vue'

export default {
  components: {
    MyLogin,
    MyUser
  },
  data() {
    return {
      cname: "MyUser"
    }
  },
}
</script>

<style></style>
