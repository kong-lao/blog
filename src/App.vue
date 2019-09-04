<template>
  <div id="app">
    <heading />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}
iframe {
  width: 800px;
  height: 600px;
}
h1 {
  margin-top: 40px;
}
p {
  text-indent: 2em;
  text-align: left;
}
img {
  max-width: 800px;
  width: 100%;
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
* {
  margin: 0;
  padding: 0;
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