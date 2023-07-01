<template>
  <table class="my-table">
      <thead>
        <tr>
          <th>编号</th>
          <th>图片</th>
          <th>名称</th>
          <th width="100px">标签</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in arr" :key="item.id">
          <!-- tr里面所有的td都由父组件决定 -->
          <slot :row="item"></slot>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "MyTable",
  props:{ arr:Array }
};
</script>

<style lang="less" scoped>
.my-table {
  width: 100%;
  border-spacing: 0;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
  th {
    background: #f5f5f5;
    border-bottom: 2px solid #069;
  }
  td {
    border-bottom: 1px dashed #ccc;
  }
  td,
  th {
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    &.red {
      color: red;
    }
  }
  .none {
    height: 100px;
    line-height: 100px;
    color: #999;
  }
}
</style>