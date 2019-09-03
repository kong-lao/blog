<template>
  <div class="home">
    <heading />
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
import heading from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    heading
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 904px) {
  .pcBox {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    img {
      box-sizing: border-box;
      display: inline-block;
      max-width: 50%;
      height: auto;
      padding: 10px;
    }
  }
}
@media screen and(max-width: 904px) {
  .phBox {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    img {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 6px;
    }
  }
}
</style>