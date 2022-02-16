<template>
  <div class="car">
    <loading v-if="isLoading"></loading>

    <div
      v-else-if="products.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full"
    >
      <div class="md:col-span-2 bg-white rounded">
        <component
          class="overflow-auto"
          v-bind:is="component"
          :products="products"
          :car="car"
          v-on:pay-now="payNow"
        ></component>
      </div>
      <div class="">
        <shop-sumary
          :products="products"
          :car="car"
          :active="component"
          v-on:pay-method="component = 'payMethod'"
        ></shop-sumary>
      </div>
    </div>
    <div class="text-center" v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-14 w-14 m-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      No se encontraron productos en el carrito de compras
    </div>
    <modal
      v-if="notification.active"
      v-on:retry="payNow"
      v-on:close="notification.active = false"
      :notification="notification"
    ></modal>
  </div>
</template>
<script>
import api from "@/api/api";
import shopSumary from "@/components/shopSumary.vue";
import ListProducts from "../components/listProducts.vue";
import loading from "../components/loading.vue";
import payMethod from "../components/payMethod.vue";
import Modal from "../components/modal.vue";

export default {
  components: { shopSumary, ListProducts, loading, payMethod, Modal },
  data() {
    return {
      car: [],
      products: [],
      component: "ListProducts",
      isLoading: true,
      notification: {
        status: false,
        active: false,
        message: "",
      },
    };
  },
  methods: {
    payNow() {
      const number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      if (number < 7) {
        this.notification.status = true;
        this.notification.message = "Se aprobó tu compra";
        localStorage.removeItem("car");
        this.car = [];
        this.products = [];
        this.component = "ListProducts";
      } else {
        this.notification.status = false;
        this.notification.message =
          "Tu compra se ha rechazado vuelve a intentarlo";
      }
      this.notification.active = true;
    },
  },
  created() {
    if (localStorage.getItem("car") != null) {
      this.car = JSON.parse(localStorage.getItem("car"));
      for (let i = 0; i < this.car.length; i++) {
        api
          .getProduct(this.car[i].id)
          .then((response) => {
            this.products.push(response);
          })
          .finally(() => (this.isLoading = false));
      }
    } else {
      this.isLoading = false;
    }
  },
};
</script>