<template>
  <div>
    <h3 data-test="todo-heading">Todo List</h3>
    <todo-item :todos="todos" />
  </div>
</template>
<script>
import TodoItem from "./todo-item.vue";

export default {
  name: "todo-list",
  data() {
    return {
      todos: [
        {
          title: "Todo One",
          id: 1,
          completed: false,
        },
        {
          title: "Todo Two",
          id: 2,
          completed: false,
        },
        {
          title: "Todo Three",
          id: 3,
          completed: false,
        },
      ],
    };
  },
  components: {
    TodoItem,
  },
};
</script>
