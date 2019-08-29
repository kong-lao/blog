<template>
  <div>
    <div class="header">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
      <div class="left">
        <router-link to="/">thelightchaser</router-link>
      </div>
      <div class="right">
        <ul>
          <li>dance works</li>
          <li>dance storys</li>
          <li>
            <router-link to="/about">about me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 272px;
  height: 137px;
  line-height: 137px;
  @include heading-1;
}
.right {
  @include heading-2;
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin: 58px 26px;
    }
  }
}
</style>