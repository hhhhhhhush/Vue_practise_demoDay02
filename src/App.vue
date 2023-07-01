<template>
  <div>
    <h1 ref="title">我是根组件</h1>
    <my-ref ref="myCom"></my-ref>

    <button @click="doClick">点我获取页面元素</button>
  </div>
</template>

<script>

import MyRef from '@/components/MyRef.vue';

/*
  1.ref作用：获取DOM对象 或 组件的引用
  2.ref语法：
    2.1 声明ref：  <标签名 ref="属性名"></标签名>
    2.2 获取ref： this.$refs.属性名
  3.注意点：ref给不同的标签使用，获取的值不同
    3.1 原生DOM标签：获取的就是dom元素
    3.2 自定义标签（组件）：获取的就是组件的vm(vc继承vm)实例
  4.ref应用场景
    4.1 如何在父组件中调用子组件的方法： ref
    4.2 ref也可以实现父传子：函数传参


*/
export default {
  components: {
    MyRef
  },
  methods: {
    doClick () {
      console.log(this)
      console.log(this.$refs.title)
      console.log(this.$refs.myCom)
      // 父组件中调用子组件的方法
      // ref也能实现父组件给子组件传递数据 函数传参
      this.$refs.myCom.sayhi("我是父组件来的哦~");
    }
  },
}
</script>

<style scoped></style>
