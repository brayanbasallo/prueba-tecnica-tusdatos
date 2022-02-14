<template>
  <div class="">
    <span v-if="readMore"
      >{{ cutString
      }}<span
        class="cursor-pointer hover:text-purple-600"
        v-on:click="readMore = false"
        >...</span
      ></span
    >
    <span v-else
      >{{ text }}
      <span
        class="
          cursor-pointer
          font-normal
          underline
          text-xm
          hover:text-purple-600
        "
        v-on:click="readMore = true"
        >Ocultar</span
      ></span
    >
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      default: 22,
    },
  },
  data() {
    return {
      readMore: true,
      lengthString: 0,
    };
  },
  computed: {
    /**
     * extract part of the text
     */
    cutString: function () {
      return this.text.substr(0, this.amount);
    },
  },
  created() {},
};
</script>