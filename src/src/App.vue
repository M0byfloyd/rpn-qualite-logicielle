<template>
  <RNPbody />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RNPbody from "./components/RNPbody.vue";

export default defineComponent({
  name: "App",
  components: {
    RNPbody,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
