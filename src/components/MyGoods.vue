<template>
  <div class="son">
      <h3>我是子组件</h3>
      <h4>商品名称:隆江猪脚饭</h4>
      <h4>商品价格:</h4>
      <!-- <button>点我砍一刀</button> -->
      <!-- slot是内置组件，用于占位。 渲染父组件传递过来的html结构 -->
      <!-- 当父组件没有传递 html结构时 会显示默认值 <button>点我购买</button> -->
      <slot> <button>点我购买</button> </slot>
  </div>
</template>

<script>
export default {
    name:'model',

    data(){
        return{

        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    .son{
        border: 1px solid red;
    }
</style>