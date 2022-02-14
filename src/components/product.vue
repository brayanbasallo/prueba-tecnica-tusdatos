<template>
  <div class="product">
    <figure class="m-auto h-40">
      <img
        class="max-h-40 m-auto"
        :src="product.image"
        @error="product.title"
      />
    </figure>
    <div class="text-left pt-2">
      <div class="flex justify-between py-2">
        <div class="font-bold text-2xl text-purple-600">
          $ {{ product.price }}
        </div>
        <div
          class="
            rounded-full
            bg-gray-100
            hover:bg-purple-600 hover:text-white
            cursor-pointer
            w-8
            h-8
            flex
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
      <!-- <h3 class="font-bold">{{ product.title }}</h3> -->
      <h3 class="font-bold">
        <read-more :amount="20" :text="product.title"></read-more>
      </h3>
      <p class="text-xs text-gray-500">
        <read-more :amount="100" :text="product.description"></read-more>
      </p>
    </div>
  </div>
</template>
<script>
import readMore from "../components/readMore.vue";

export default {
  setup() {},
  props: {
    product: {
      required: true,
    },
  },
  components: {
    readMore,
  },
};
</script>