<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <todo-list />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/todo-list.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px 10;
}
</style>
