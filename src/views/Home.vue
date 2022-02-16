<template>
  <div class="home">
    <loading v-if="isLoading"></loading>
    <div v-else>
      <div class="text-right py-4">
        <input
          class="
            w-full
            md:w-7/12
            border border-gray-300
            rounded
            h-10
            px-2
            focus:border-purple-600
            outline-none
          "
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
          <product v-on:add-to-car="addToCar" :product="product"></product>
        </div>
      </section>
    </div>
    <div class="text-gray-400" v-if="filterProducts.length <= 0 && !isLoading">
      no se encontraron productos...
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
      car: {},
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

    if (localStorage.getItem("car"))
      this.car = JSON.parse(localStorage.getItem("car"));
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
  methods: {
    addToCar(productId) {
      this.car = JSON.parse(localStorage.getItem("car"));
      let product;
      if (
        this.car != null &&
        this.car.find((element) => element.id == productId)
      ) {
        this.car.find((element) => {
          if (element.id == productId) element.amount++;
        });
      } else {
        product = { id: productId, amount: 1 };
      }

      if (this.car == null) {
        this.car = [product];
      } else if (product != null) {
        this.car.push(product);
      }
      this.$toast.success("Agregado correctamente", {
        position: "top-right",
        timeout: 2041,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
      localStorage.setItem("car", JSON.stringify(this.car));
    },
  },
};
</script>
<style scoped>
.fit-content {
  height: fit-content;
}
</style>
