<template>
  <div class="son">
      <h3>我是子组件</h3>
      <h4>商品名称:隆江猪脚饭</h4>
      <h4>商品价格:</h4>
      <button>点我砍一刀</button>
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