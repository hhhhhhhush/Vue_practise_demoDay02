<template>
  <div class="my-tag">
    <input
        class="input"
        type="text"
        placeholder="输入标签"
        v-if="flag"
        ref="input"
        v-focus
        v-model="msg"
        @keyup.enter="$emit('input',msg);falg=false"
      />
    <div class="text" v-else @click="doClick">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: { value: String },
  data() {
    return {
      flag: false,
      msg: ''
    };
  },
  methods: {
    async doClick() {
      // (1)点击切换输入框
      this.flag = true
      // (2)输入框自动聚焦
      // this.$nextTick().then( () => {
      //   this.$refs.input.focus()
      // } )

      // await this.$nextTick();
      // this.$refs.input.focus()
    },
    
  },
  directives: {
      focus: {
        inserted(el,binding) {
          el.focus()
        }
      }
    }
};
</script>

<style lang="less">
.my-tag {
  cursor: pointer;

  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;

    &::placeholder {
      color: #666;
    }
  }
}
</style>