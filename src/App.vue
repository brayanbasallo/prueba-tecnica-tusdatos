<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <div class="container m-auto">
      <nav-bar></nav-bar>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  setup() {},
  components: {
    navBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
