<template>
  <div>
    <h1>我是根组件</h1>
    <!-- 需求
      1.点击按钮，切换输入框
      2.输入框自动聚焦
    -->
    <button v-if="flag" @click="change">点我切换</button>
    <input v-else ref="input" type="text" placeholder="请输入内容">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: true
      }
    },
    /*
      nextTick学习路线
      1.nextTick的作用：等待当前视图更新结束后执行
      2.nextTick底层原理：promise
      3.nextTick应用场景/面试点：
        3.1 是什么时候使用nextTick：更新视图且需要操作DOM
        3.2 使用vue时候有没有遇到什么坑？
          a. 更新数据，视图不更新： 数据更新检测 $set
          b. 给元素添加了ref，但却无法获取：vue更新视图是异步的，$nextTick
            （1）数据变化了，vue会开启一个promise异步队列来更新视图，当这个promise执行完毕之后，vue会执行nextTick的promise
    */


    // vue为什么要异步？ 同一队列下，如果对一个数据修改多次。vue只会更新一次
    methods: {
      change () {
        // 1.点击切换输入框
        this.flag = false;
        // 2.输入框自动聚焦
        // this.$refs.input.focus();
        this.$nextTick( () => {
          this.$refs.input.focus();
        })
      }
    },
  }
</script>

<style scoped>

</style>
