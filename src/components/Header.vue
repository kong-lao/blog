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
          <li v-on:mouseenter="visible1" @mouseleave="display1">
            <router-link to="/">dance storys</router-link>
            <ul v-show="seen1">
              <li>
                <router-link to="/">wind</router-link>
              </li>
              <li>
                <router-link to="/">big fish</router-link>
              </li>
              <li>
                <router-link to="/about">say something</router-link>
              </li>
            </ul>
          </li>
          <li v-on:mouseenter="visible2" @mouseleave="display2">
            <router-link to="/">dance works</router-link>
            <ul v-show="seen2">
              <li>
                <router-link to="/">wind</router-link>
              </li>
              <li>
                <router-link to="/">big fish</router-link>
              </li>
              <li>
                <router-link to="/">say something</router-link>
              </li>
            </ul>
          </li>
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
  name: "Header",
  data: function() {
    return {
      seen1: false,
      seen2: false
    };
  },
  methods: {
    visible1: function() {
      this.seen1 = true;
    },
    display1: function() {
      this.seen1 = false;
    },
    visible2: function() {
      this.seen2 = true;
    },
    display2: function() {
      this.seen2 = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen {
  * {
    padding: 0;
    padding: 0;
  }
  ul,
  li,
  ol {
    list-style: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 272px;
    height: 137px;
    line-height: 137px;
    font-weight: 900;
    font-size: 24px;
    color: $black;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: $black;
  }

  .right {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: $black;
    > ul {
      > li {
        display: inline-block;
        padding: 58px 26px;
        background: #fff;
        > ul {
          position: absolute;
          > li {
            margin: 58px 0;
          }
        }
      }
    }
  }
}
</style>