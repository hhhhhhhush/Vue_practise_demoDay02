<template>
  <div>
    <h1>我是根组件</h1>
    <!-- 
      组件在复用的时候，不同页面需要渲染的 "数据" 不同：父子组件传值
      组件在复用的时候，不同页面需要渲染的 "html结构" 不同：插槽
      1.匿名插槽的作用：父组件传递 "html结构" 给子组件
      2.匿名插槽的语法：
          父组件传：<子组件 > html结构 </子组件>
          子组件收：<slot> 默认结构 </slot>


     -->
    <!-- 子组件 -->
    <my-goods>
      <button disabled>已卖完</button>
      <p>去其他猪脚饭吃吧~</p>
      <p style="color:red;">本店太火爆啦！</p>
    </my-goods>
    <my-goods>
      <a href="#">点击跳转到商家</a>
    </my-goods>
    <my-goods></my-goods>
  </div>
</template>

<script>

import MyGoods from '@/components/MyGoods.vue'
export default {
  components: { MyGoods }
}
</script>

<style></style>
