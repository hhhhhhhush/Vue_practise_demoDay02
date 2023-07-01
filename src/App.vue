<template>
  <div>
    <h1>我是根组件</h1>
    <input type="text" v-focus>
    <p v-color=" 'red' ">我是黑马ikun，我喂自己袋盐</p>
    <p v-color=" color " v-bgc=" 'skyblue' ">我是黑马ikun，我喂自己袋盐</p>
    <b v-bgc=" 'cyan' ">白马程序员</b>
  </div>
</template>

<script>
  export default {
    // el: 挂载点
    // data： 数据
    data() {
      return {
        color: 'blue'
      }
    },
    // methods: 方法
    // computed：计算属性
    // watch： 侦听器
    // components： 注册组件
    // name： 组件名称
    // props： 子组件接收数据
    
    // 自定义指令
    directives: {
      // 指令名: 使用的时候 v-指令名
      focus: {
        // 钩子函数： 自动执行
        // inserted: 被绑定元素插入父节点时调用
        inserted (el,binding) {
          console.log(el) //el: 指令所绑定的元素，也就是标签，可以直接用来操作DOM
          console.log(binding) //指令信息（指令的名字、指令的值）
          el.focus() //调用input框的focus方法
        } 
      },
      color: {
        // 1.inserted: 指令所在的元素被渲染的时候执行（执行一次）
        inserted (el,binding) {
          // 设置颜色
          el.style.color = binding.value;
        },
        // 2.update：指令发生变化的时候执行
        update( el,binding) {
          //设置颜色
          el.style.color = binding.value;
        }
      }

    }

  }
</script>

<style scoped>

</style>
