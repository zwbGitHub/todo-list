<template>
  <div class="ipt-wrapper">
    <input
      type="text"
      @keydown.enter="setTodo"
      v-model.trim="todo"
      @input="getIpt"
    />
    <button @click="setTodo" :class="{ 'add-click': addClick }" >添加</button>
    <button @click="getTodo" :class="{ 'search-click': searchClick }">
      查找
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { nanoid } from 'nanoid'
export default {
  data() {
    return {
      todo: '',
      addClick: false,
      searchClick: false,
    }
  },
  computed: {
    ...mapState(['todoList']),
  },
  methods: {
    setTodo() {
      this.addClick = true
      setTimeout(() => {
        this.addClick = false
      }, 100)
      if (this.todo) {
        this.addClick = true
        const todos = [...this.todoList]
        todos.unshift({ title: this.todo, id: nanoid() })
        this.$store.commit('SetTodoList', todos)
        this.$store.commit('SearchTodo', todos)
        this.todo = ''
      }
    },
    getTodo() {
      this.searchClick = true
      setTimeout(() => {
        this.searchClick = false
      }, 100)
      if (this.todo) {
        const showTodos = this.todoList.filter((item) =>
          item.title.includes(this.todo)
        )
        this.$store.commit('SearchTodo', showTodos)
      }
    },
    getIpt() {
      if (this.todo === '') {
        this.$store.commit('SearchTodo', this.todoList)
      }
    },
  },
}
</script>
<style lang="less">
.ipt-wrapper {
  border: 1px solid rgb(170, 33, 170);
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  input {
    height: 100%;
    flex-grow: 1;
    outline-style: none;
    box-sizing: border-box;
    border: none;
    padding: 0;
    font-size: 20px;
  }
  button {
    width: 15%;
    padding: 0;
    height: 100%;
    border: none;
    line-height: 100%;
    vertical-align: middle;
    //   background-color: white;
    transition: all 0.05s linear;
    border-left: 1px solid rgba(170, 33, 170, 0.5);
    background-color: rgba(255, 255, 255, 0.774);
  }
  .add-click,
  .search-click {
    background-color: rgb(170, 33, 170);
  }
}
</style>
