<template>
  <div class="home">
    <loading v-if="isLoading"></loading>
    <div v-else>
      <div class="text-right py-4">
        <input
          class="w-7/12 border border-gray-300 rounded-md h-10 px-2"
          type="search"
          placeholder="Filtrar producto"
          v-model="filter"
        />
      </div>
      <section
        class="
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
          v-for="product in filterProducts"
          :key="product.id"
        >
          <product :product="product"></product>
        </div>
      </section>
    </div>
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
      filter: "",
    };
  },
  created() {
    /**
     *start product query in api, stop loading
     */
    api
      .getProducts()
      .then((products) => (this.products = products))
      .finally(() => {
        this.isLoading = false;
      });
  },
  computed: {
    /**
     * search product for name or description
     */
    filterProducts() {
      return Object.keys(this.products)
        .map((key) => this.products[key])
        .filter((item) => {
          return (
            item.description
              .toLowerCase()
              .includes(this.filter.toLowerCase()) ||
            item.title.toLowerCase().includes(this.filter.toLowerCase())
          );
        });
    },
  },
};
</script>
<style scoped>
.fit-content {
  height: fit-content;
}
</style>
