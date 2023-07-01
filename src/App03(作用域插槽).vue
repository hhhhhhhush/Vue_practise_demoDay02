<template>
  <div>
    <h1>我是根组件</h1>
    <!-- 子组件 -->
    <!-- 
      作用域插槽：
        作用：子组件传递"数据"给父组件的插槽
        语法：
          子组件传：<slot 属性名="属性值"> 默认结构 </slot>
          父组件收：v-slot="对象名"
            <template v-slot="对象名">
              html结构
            </template>
      具名作用域插槽：
        v-slot:插槽名 = "对象名"
        #插槽名 = "对象名"
     -->

    <my-student :arr="list1">
      <!-- <template v-slot="obj"> -->
      <!-- <template v-slot:title="obj"> -->
      <!-- 解构a -->
      <!-- <template v-slot="{ a }"> -->
      <!-- <p>{{ obj }}</p>
        <p>{{ obj.a }}</p>
        <p>{{ obj.b }}</p>
        <p>{{ obj.c }}</p>
        <button>点我</button> -->
      <!-- </template> -->

      <template #title>
        <b>头像</b>
      </template>
      <!-- 接收子组件传过来的数据  -->
      <template #content="scope">
        <img :src="scope.row.headImgUrl" alt="">
      </template>
    </my-student>

    <my-student :arr="list2">
      <template #title>
        <b>操作</b>
      </template>

      <template #content="scope">
        <button @click="list2.splice(scope.$index,1)">删除</button>
      </template>
    </my-student>
  </div>
</template>

<script>

import MyStudent from '@/components/MyStudent.vue'
export default {
  components: { MyStudent },
  data() {
    return {
      list1: [
        {
          id: "13575",
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg"
        },
        {
          id: "62408",
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg"
        },
        {
          id: "73969",
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg"
        }
      ],
      list2: [
        {
          id: "13575",
          name: "传同学",
          age: 8,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg"
        },
        {
          id: "62408",
          name: "黑同学",
          age: 5,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg"
        },
        {
          id: "73969",
          name: "慧同学",
          age: 1,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg"
        }
      ]
    }
  },
}
</script>

<style></style>
