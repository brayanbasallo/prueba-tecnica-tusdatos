<template>
  <div id="app" class="bg-gray-100">
    <div class="container m-auto">
      <nav id="nav">
        <ul class="flex justify-between p-4">
          <li>
            <router-link
              class="text-xl font-bold text-gray-800 hover:text-green-600"
              to="/"
              >BRAND</router-link
            >
          </li>
          <li class="grid grid-cols-2 gap-2">
            <router-link class="text-gray-800 hover:text-green-600" to="/"
              >Home</router-link
            >
            <router-link class="text-gray-800 hover:text-green-600" to="/about"
              >About</router-link
            >
          </li>
        </ul>
      </nav>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
