<template>
  <div>
    <h1>我是根组件</h1>
    <input type="text" v-model="msg">
    <input type="text" :value="msg" @input="changeVal($event)">
    <!-- 
      v-model的本质是语法糖：两个语法做的事情是一样的，只是写法不同
      父传子: props ==> :value
      子传父：@input
     -->
    <my-goods :value="price" @input="price=$event"></my-goods>
    <my-goods v-model="price"></my-goods>
  </div>
</template>

<script>
import MyGoods from './components/MyGoods.vue'
export default {
  components: {
    MyGoods
  },
  data() {
    return {
      msg: "",
      price: 100
    }
  },
  methods: {
    changeVal (e) {
      this.msg = e.target.value;
    }
  },
}
</script>

<style scoped></style>
