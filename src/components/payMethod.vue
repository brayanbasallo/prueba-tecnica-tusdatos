<template>
  <div class="p-5 text-left">
    <h2 class="font-bold text-2xl">Finalizar Compra</h2>
    <div class="border border-gray-100 p-5 rounded">
      <div class="pb-5 border-b-2 border-gray-200 border-dashed items-center">
        <div class="flex">
          <div class="pr-3">
            <input type="radio" checked />
          </div>
          <div class="">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <p class="font-bold">Tarjeta de credito</p>
            </div>
            <p>Método de pago seguro</p>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="grid gap-5 md:grid-cols-2">
          <div class="grid">
            <label for="name" class="bold text-gray-400">Nombre</label>
            <input
              class="
                w-full
                border border-gray-300
                rounded
                h-10
                px-2
                focus:border-purple-600
                outline-none
              "
              type="text"
              name=""
              id="name"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div class="grid">
            <label for="lastName" class="bold text-gray-400">Apellidos</label>
            <input
              class="
                w-full
                border border-gray-300
                rounded
                h-10
                px-2
                focus:border-purple-600
                outline-none
              "
              type="text"
              name=""
              id="lastName"
              placeholder="Ingresa tus apellidos"
            />
          </div>
          <div class="grid">
            <label for="cardName" class="bold text-gray-400"
              >Numero de la Tarjeta</label
            >
            <input
              class="
                w-full
                border border-gray-300
                rounded
                h-10
                px-2
                focus:border-purple-600
                outline-none
              "
              type="text"
              name=""
              id="cardName"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div class="grid gap-5 grid-cols-2">
            <div class="grid">
              <label for="name" class="bold text-gray-400">Fecha</label>
              <input
                class="
                  w-full
                  border border-gray-300
                  rounded
                  h-10
                  px-2
                  focus:border-purple-600
                  outline-none
                "
                type="text"
                name=""
                id="name"
                placeholder="MM/YYYY"
                maxlength="7"
              />
            </div>
            <div class="grid">
              <label for="name" class="bold text-gray-400">CVV</label>
              <input
                class="
                  w-full
                  border border-gray-300
                  rounded
                  h-10
                  px-2
                  focus:border-purple-600
                  outline-none
                "
                type="password"
                name=""
                id="name"
                placeholder="000"
                maxlength="3"
              />
            </div>
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
            mt-5
          "
          @click="$emit('pay-now')"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

