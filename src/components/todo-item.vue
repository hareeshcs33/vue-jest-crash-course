<template>
  <ul>
    <li
      v-for="todo in todoList"
      :key="todo"
      data-test="todo-item"
      :class="todo.completed ? 'completed' : ''"
    >
      <span>{{ todo.title }}</span>
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-completed"
      />
    </li>
  </ul>
  <form data-test="form" @submit.prevent="addNewTodo">
    <input type="text" v-model="newTodo" data-test="new-todo" />
  </form>
</template>
<script>
export default {
  name: "todo-item",
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todoList() {
      return this.todos;
    },
  },
  methods: {
    addNewTodo() {
      this.todoList.push({
        title: this.newTodo,
        completed: false,
        id: 4,
      });
    },
  },
};
</script>
<style scoped>
.completed {
  color: green;
}
</style>
