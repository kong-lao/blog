<template>
  <div id="app">
    <heading />
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}

@media screen and (min-width: 904px) {
  #app {
    padding: 0 48px;
  }
}
@media screen and(max-width: 904px) {
  #app {
    padding: 0 16px;
  }
}
</style>

<script>
// @ is an alias to /src
import heading from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    heading
  }
};
</script>