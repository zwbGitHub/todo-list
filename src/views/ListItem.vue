<template>
  <div class="item-wrapper">
    <div class="text" v-if="showIpt" @dblclick="setIptShow()">
      {{ item.title }}
    </div>
    <input
      type="text"
      ref="ipt"
      v-model="changeValue"
      @blur="iptBlur()"
      class="ipt"
      @keydown.enter="setChangedTodo()"
      v-else
    />
    <button @click="setIptShow()">编辑</button>
    <button @click="setChangedTodo()">完成</button>
    <button @click="deleteTodo()">删除</button>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      showIpt: true,
      changeValue: this.item.title,
    }
  },
  methods: {
    setIptShow() {
      this.showIpt = false
      this.changeValue = this.item.title
      this.$nextTick(() => {
        this.$refs.ipt.focus()
      })
    },
    setChangedTodo() {
      console.log(1)
      this.showIpt = true
      this.$store.commit('ChangeTodo', {
        title: this.changeValue,
        id: this.item.id,
      })
    },
    deleteTodo() {
      this.$store.commit('DeleteTodo', this.item.id)
    },
    iptBlur() {
      this.showIpt = true
    },
  },
}
</script>

<style lang="less">
.item-wrapper {
  height: 25px;
  line-height: 25px;
  background-color: orangered;
  border: 1px solid rgb(170, 33, 170);
  padding: 5px 20px;
  margin-bottom: 5px;
  text-align: left;
  background-color: rgb(221, 120, 221);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  .text {
    width: 70%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .ipt {
    height: 100%;
    border: none;
    box-sizing: border-box;
    width: 70%;
    outline: none;
    border-radius: 3px;
  }
  button {
    background-color: rgba(255, 255, 255, 0.774);
    border: none;
    border-radius: 3px;
    flex-grow: 1;
    margin-left: 3px;
    font-size: 12px;
    width: 30px;
  }
}
</style>
