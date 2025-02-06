<template>
  <div>
    <ol>
      <li v-for="fruit in fruits" :key="fruit" data-test="fruit">
        {{ fruit }}
      </li>
    </ol>
    <p data-test="num-fruit">Number of fruits: {{ numFruits }}</p>
  </div>
</template>

<script>
export default {
  name: "FruitList",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange"],
    };
  },
  computed: {
    numFruits() {
      return this.fruits.length;
    },
  },
  methods: {
    addFruit(fruit) {
      this.fruits.push(fruit);
    },
  },
};
</script>
