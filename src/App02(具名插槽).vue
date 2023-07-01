<template>
  <div>
    <h1>我是根组件</h1>
    <!-- 子组件 -->
    <!-- 
      1.具名插槽作用：父组件 传递多个位置 "html结构"给子组件
      2.语法：
          父组件传：v-slot:插槽名 
          子组件收：<slot> 默认结构 </slot>
     -->
    <MyCell>
      <!-- template类似于div，包裹html结构，不会被渲染 -->
      <template v-slot:title>
        <h3>我是标题</h3>
        <h3>我是标题</h3>
      </template>

      <template #content>
        <b>我是内容</b>
      </template>

      <template #right>
        <button>我是按钮</button>
      </template>
    </MyCell>
  </div>
</template>

<script>

import MyCell from '@/components/MyCell.vue'
export default {
  components: { MyCell }
}
</script>

<style></style>
