<template>
  <div class="nav">
    <nav>
      <ul class="flex py-4 items-center">
        <li>
          <router-link
            class="text-xl font-bold text-gray-800 hover:text-purple-600"
            to="/"
            >BRAND</router-link
          >
        </li>
        <li class="grid grid-cols-3 gap-2 ml-5">
          <router-link
            :class="{ ' border-b-2 border-purple-600 ': $route.name == 'Home' }"
            class="text-gray-800 hover:text-purple-600"
            to="/"
            >Principal</router-link
          >
          <router-link
            :class="{ ' border-b-2 border-purple-600 ': $route.name == 'Car' }"
            class="text-gray-800 hover:text-purple-600"
            to="/car"
            >Carrito</router-link
          >
          <router-link
            :class="{
              ' border-b-2 border-purple-600 ': $route.name == 'About',
            }"
            class="text-gray-800 hover:text-purple-600"
            to="/about"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>