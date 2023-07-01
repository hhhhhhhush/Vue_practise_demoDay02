<template>
  <div class="cell">
      <div class="title" >
        <!-- 标题插槽 -->
        <slot name="title">默认标题</slot>
      </div>
      <div class="content" >
        <!-- 内容插槽 -->
        <slot name="content">默认内容</slot>
      </div>
      <div class="right" >
        <!-- 右边插槽 -->
        <slot name="right">默认右侧</slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .cell{
        border: 1px solid #f00;
        height: 160px;
        padding: 10px;
        position: relative;
    }

    .title{
        float: left;

    }

    .content{
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    .right{
        float: right;
    }
</style>
