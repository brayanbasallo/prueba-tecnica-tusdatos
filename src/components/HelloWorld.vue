<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Esta es mi propuesta para la prueba técnica<br />
      Mas sobre
      <a href="https://dbyte.tech/" target="_blank" rel="noopener">
        Brayan Basallo Soto
      </a>
    </p>
    <h3 class="text-lg">Framework de css utilizado</h3>
    <p>
      Decidi utilizar el Framework tailwindcss css porque permite una mayor
      libertad creativa
    </p>
    <ul>
      <li>
        <a href="https://tailwindcss.com" target="_blank" rel="noopener">
          tailwindcss
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
