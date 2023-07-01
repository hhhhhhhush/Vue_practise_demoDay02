<template>
  <div>
    <!-- <slot a="1" :b="2" c="{name:'mzz'}" name="title">默认结构</slot> -->
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>
            <slot name="title"></slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in arr" :key="item.id">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <slot name="content" :row="item" :$index="index"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props:{
    arr:Array
  }
}
</script>

<style scoped>
table{
  margin-top: 20px;
  border-collapse: collapse;
}
td {
  padding: 8px 80px;
}

img{
  height: 90%;
}
</style>

