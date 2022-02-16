<template>
  <div class="">
    <div class="">
      <div class="overflow-auto">
        <table class="items-center bg-transparent w-full border-collapse">
          <thead>
            <tr>
              <th
                class="
                  px-6
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
                Producto
              </th>
              <th
                class="
                  px-6
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
                Cantidad
              </th>
              <th
                class="
                  px-6
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
                Precio
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in products" :key="product.id">
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  p-4
                  text-left text-blueGray-700
                  flex
                  gap-5
                  items-center
                  whitespace-nowrap
                "
              >
                <img class="h-16" :src="product.image" alt="" />

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
                {{ getAmount(product.id) }}
              </td>
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
                ${{ product.price }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import functions from "@/functions/functions";

export default {
  props: {
    car: {
      required: true,
      type: Array,
    },
    products: {
      required: true,
    },
  },
  methods: {
    getAmount(productId) {
      return functions.getAmount(productId, this.car);
    },
  },
};
</script>