<template>
  <p v-if="show">{{ msg }}</p>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      show: true,
    };
  },
};
</script>
