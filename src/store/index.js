import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    showTodos: JSON.parse(localStorage.getItem('todoList')) || [],
  },
  mutations: {
    SearchTodo(state, value) {
      state.showTodos = value
    },
    SetTodoList(state, value) {
      state.todoList = value
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },
    ChangeTodo(state, value) {
      let id = state.todoList.findIndex((item) => item.id === value.id)
      state.todoList.splice(id, 1, value)
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
      let showId = state.showTodos.findIndex((item) => item.id === value.id)
      state.showTodos.splice(showId, 1, value)
    },
    DeleteTodo(state, value) {
      let id = state.todoList.findIndex((item) => item.id === value)
      state.todoList.splice(id, 1)
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
      let showId = state.showTodos.findIndex((item) => item.id === value)
      state.showTodos.splice(showId, 1)
    },
  },
  actions: {},
  modules: {},
})
