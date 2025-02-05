<template>
  <ul>
    <li v-for="todo in todoList" :key="todo" data-test="todo-item">
      <h4>{{ todo.title }}</h4>
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
