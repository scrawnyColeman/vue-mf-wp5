<script lang="ts">
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div id="vue-app-container">
    <h4 id="vue-app-title">A microfrontend built with VueJS</h4>
    <Button />
  </div>
</template>

<style>
#vue-app-container {
  background-color: rgb(174, 59, 78);
  color: rgb(245, 228, 197);
  width: 100%;
  height: 250px;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
}
#vue-app-title {
  margin: 0 0 1rem 0;
}
</style>
