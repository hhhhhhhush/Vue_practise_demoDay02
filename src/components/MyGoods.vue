<template>
    <div class="son">
        <h3>我是子组件</h3>
        <h4>商品名称:隆江猪脚饭</h4>
        <h4>商品价格: {{ value }}</h4>
        <button @click="$emit('input',value-1)">点我砍一刀</button>
    </div>
</template>

<script>
export default {
    name: 'MyGoods',
    data() {
        return {

        }
    },
    methods: {

    },
    props: {
        value: Number
    }
}
</script>

<style scoped>
.son {
    border: 1px solid red;
}
</style>