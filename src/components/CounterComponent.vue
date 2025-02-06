<template>
  <button @click="count++">Add up</button>
  <p>Total clicks: {{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
