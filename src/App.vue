<template>
  <div id="app">
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
@media screen and (min-width: 904px) {
  #app {
    padding: 0 48px;
  }
}
@media screen and(max-width: 904px) {
  #app {
    padding: 0 48px;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
