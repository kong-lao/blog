<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="pcBox phBox">
      <img src="https://i.imgsafe.org/e3/e3f3760d3e.jpeg" alt />
      <img src="https://i.imgsafe.org/e3/e3f3dc97c5.jpeg" alt />
      <img src="https://i.imgsafe.org/e3/e3f3c1da9f.jpeg" alt />
      <img src="https://i.imgsafe.org/e3/e3f378b881.jpeg" alt />
      <img src="https://i.imgsafe.org/e3/e3f42851d8.jpeg" alt />
      <img src="https://i.imgsafe.org/e3/e3f4031ec6.jpeg" alt />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style lang="scss" scoped>
// @media screen and (min-width: 904px) {
// }
// @media screen and(max-width: 904px) {
// }
@media screen and (min-width: 904px) {
  .pcBox {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    img {
      box-sizing: border-box;
      display: inline-block;
      width: 50%;
      padding: 10px;
    }
  }
}
@media screen and(max-width: 904px) {
  .phBox {
    img {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      padding: 6px;
    }
  }
}
</style>