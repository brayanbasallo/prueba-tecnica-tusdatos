<template>
  <div
    class="
      h-screen
      w-screen
      bg-gray-700 bg-opacity-50
      absolute
      inset-0
      grid
      place-items-center
      text-left
    "
    @click="$emit('close')"
  >
    <div class="bg-white p-5 rounded w-11/12 md:w-8/12 xl:w-6/12">
      <div class="head flex justify-between">
        <h3 class="font-bold flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Notificación
        </h3>
        <svg
          @click="$emit('close')"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 cursor-pointer text-gray-700 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div
        class="p-3 my-5 rounded"
        :class="
          notification.status
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        "
      >
        {{ notification.message }}
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <button
          class="
            md:col-start-2
            w-full
            bg-purple-600
            text-center
            hover:bg-purple-900
            text-white
            rounded
            p-3
          "
          v-if="!notification.status"
          @click="$emit('retry')"
        >
          Volver a intentarlo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      required: true,
    },
  },
};
</script>

