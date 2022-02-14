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
        <li class="grid grid-cols-2 gap-2 ml-5">
          <router-link class="text-gray-800 hover:text-purple-600" to="/"
            >Principal</router-link
          >
          <router-link class="text-gray-800 hover:text-purple-600" to="/about"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>