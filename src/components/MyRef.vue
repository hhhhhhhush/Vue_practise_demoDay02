<template>
    <div>
        <button>按钮</button>
        <p>p标签</p>
        <p>父组件的数据赋值给msg：{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: ""
            }
        },
        methods: {
            sayhi (str) {
                console.log("hi,my name is mzz")
                console.log(str)
                this.msg = str;
            }
        },
    }
</script>

<style scoped>

</style>