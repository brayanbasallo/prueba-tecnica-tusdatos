<template>
  <div class="home">
    <loading v-if="isLoading"></loading>
    <section
      class="
        p-4
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
        gap-5
      "
    >
      <div
        class="p-2 rounded-xl bg-white fit-content"
        v-for="product in products"
        :key="product.id"
      >
        <product :product="product"></product>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api/api";
import loading from "../components/loading.vue";
import product from "../components/product.vue";
//importar componente
export default {
  name: "Home",
  components: {
    loading,
    product,
  },
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  created() {
    api
      .getProducts()
      .then((products) => (this.products = products))
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
<style scoped>
.fit-content {
  height: fit-content;
}
</style>
