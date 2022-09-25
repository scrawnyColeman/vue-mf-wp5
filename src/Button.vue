<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="count++">Click count: {{ count }}</button>
</template>

<style>
button {
  background-color: #e38d9b;
  color: #17111c;
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 600;
}
button:hover {
  opacity: 75%;
}
</style>
