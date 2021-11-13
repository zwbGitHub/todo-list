<template>
  <div class="container">
    <search />
    <todo-list />
  </div>
</template>

<script>
import Search from './Search.vue'
import TodoList from './TodoList.vue'
export default {
  components: {
    TodoList,
    Search,
  },
  methods: {},
}
</script>

<style lang="less">
.container {
  margin: 5px auto 0;
  width: 50%;
  border: 4px rgba(170, 33, 170, 0.5) double;
  padding: 10px 60px;
  box-shadow:3px 3px 10px rgba(170, 33, 170, 0.5);
  border-radius: 8px;
  background-color: skyblue;
}
</style>
