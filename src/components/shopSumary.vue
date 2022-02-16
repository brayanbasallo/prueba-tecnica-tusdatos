<template>
  <div class="">
    <div class="rounded bg-white shadow p-5 text-left">
      <h2 class="font-bold text-2xl">Resumen de compra</h2>
      <hr class="py-2" />
      <div class="">
        <div class="block w-full overflow-x-auto">
          <table class="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th
                  class="
                    bg-blueGray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0 border-t-0
                    font-semibold
                    text-left
                  "
                >
                  Producto
                </th>

                <th
                  class="
                    px-6
                    border-t-0
                    bg-blueGray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    font-semibold
                    text-left
                  "
                >
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in products" :key="product.id">
                <th
                  class="
                    border-t-0
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    py-4
                    border-gay-200 border-b-2 border-dashed
                    text-left text-blueGray-700
                  "
                >
                  {{ product.title }}
                </th>
                <td
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    p-4
                    text-left
                  "
                >
                  ${{ getAmount(product.id) * product.price }}
                </td>
              </tr>
              <tr>
                <td
                  class="
                    border-t-0
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    py-6
                    border-gay-200
                    text-left text-blueGray-700
                    font-bold
                  "
                >
                  Total
                </td>
                <td
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    py-6
                    text-left
                    flex
                  "
                >
                  ${{ total() }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        class="
          w-full
          bg-purple-600
          text-center
          hover:bg-purple-900
          text-white
          rounded
          p-3
        "
        v-if="active == 'ListProducts'"
        @click="$emit('pay-method')"
      >
        Pagar ahora
      </button>
    </div>
  </div>
</template>

<script>
import functions from "@/functions/functions";

export default {
  setup() {},
  props: {
    car: {
      required: true,
      type: Array,
    },
    products: {
      required: true,
    },
    active: {
      required: true,
    },
  },
  methods: {
    total() {
      let totalPrice = 0;
      for (let i = 0; i < this.products.length; i++) {
        this.car.find((element) => {
          if (element.id == this.products[i].id)
            totalPrice += element.amount * this.products[i].price;
        });
      }
      return totalPrice;
    },
    getAmount(productId) {
      return functions.getAmount(productId, this.car);
    },
  },
};
</script>