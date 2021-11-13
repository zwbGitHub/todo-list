<template>
  <div class="todo-list">
    <list-item v-for="item of showTodos" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import { mapState } from 'vuex'
export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapState(['showTodos']),
  },
}
</script>

<style lang="less">
.todo-list {
  margin: 25px 20px;
}
</style>
