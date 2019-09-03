<template>
  <div class="home">
    <heading />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="pcBox phBox">
      <img
        src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/06/08/ChMlWV1Dlw-IaFobACS9k0vYGkIAAMTbgPQaL4AJL2r503.jpg"
        alt
      />
      <img src="../../public/2.jpg" alt />
      <img src="../../public/3.jpg" alt />
      <img src="../../public/4.jpg" alt />
      <img src="../../public/1.jpg" alt />
      <img src="../../public/2.jpg" alt />
      <img src="../../public/3.jpg" alt />
      <img src="../../public/4.jpg" alt />
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
      width: 50%;
      height: 100%;
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