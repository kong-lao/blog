<template>
  <div>
    <div class="header">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
      <div class="left">
        <router-link to="/">thelightchaser</router-link>
      </div>
      <div class="right">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.5 8.25H25.5V11.25H4.5V8.25ZM4.5 13.5H25.5V16.5H4.5V13.5ZM25.5 18.75H4.5V21.75H25.5V18.75Z"
            fill="#222222"
          />
        </svg>

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
@media screen and (min-width: 904px) {
  .right {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: $black;
    > ul {
      > li {
        display: inline-block;
        margin: 58px 26px;
        > ul {
          position: absolute;
          background: #fff;
          margin-left: -38px;
          > li {
            margin: 58px 0;
            width: 207px;
          }
        }
      }
    }
    > svg {
      display: none;
    }
  }
}

@media screen and(max-width: 904px) {
}
</style>