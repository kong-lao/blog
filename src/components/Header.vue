<template>
  <div>
    <div class="header">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
      <div class="top">
        <div class="left">
          <router-link to="/">thelightchaser</router-link>
        </div>
        <div class="pcRight">
          <ul>
            <li v-on:mouseenter="pcVisible1" @mouseleave="pcDisplay1">
              <router-link to="/">dance storys</router-link>
              <ul v-show="pcSeen1">
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
            <li v-on:mouseenter="pcVisible2" @mouseleave="pcDisplay2">
              <router-link to="/">dance works</router-link>
              <ul v-show="pcSeen2">
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
        <div class="phRight">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-on:click="phVisible1"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 8.25H25.5V11.25H4.5V8.25ZM4.5 13.5H25.5V16.5H4.5V13.5ZM25.5 18.75H4.5V21.75H25.5V18.75Z"
              fill="#222222"
            />
          </svg>
        </div>
      </div>
      <div class="phShow">
        <ul v-show="phSeen1">
          <li>
            <div v-on:click="phVisible2">dance storys</div>
            <ul v-show="phSeen2">
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
          <li>
            <div v-on:click="phVisible3">dance works</div>
            <ul v-show="phSeen3">
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
      pcSeen1: false,
      pcSeen2: false,
      phSeen1: false,
      phSeen2: false,
      phSeen3: false
    };
  },
  methods: {
    pcVisible1: function() {
      this.pcSeen1 = true;
    },
    pcDisplay1: function() {
      this.pcSeen1 = false;
    },
    pcVisible2: function() {
      this.pcSeen2 = true;
    },
    pcDisplay2: function() {
      this.pcSeen2 = false;
    },
    phVisible1: function() {
      this.phSeen1 = !this.phSeen1;
      this.phSeen2 = false;
      this.phSeen3 = false;
    },
    phVisible2: function() {
      this.phSeen2 = !this.phSeen2;
      this.phSeen3 = false;
    },
    phVisible3: function() {
      this.phSeen3 = !this.phSeen3;
      this.phSeen2 = false;
    }
  }
};
</script>

<style lang="scss" scoped>
ul,
li,
ol {
  list-style: none;
}
.top {
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
  text-transform: uppercase;
  color: $black;
}
@media screen and (min-width: 904px) {
  .left {
    margin-left: 26px;
    line-height: 137px;
    font-weight: 900;
    font-size: 24px;
    color: $black;
  }
  .pcRight {
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
  }
  .phRight {
    display: none;
  }
  .phShow {
    display: none;
  }
}

@media screen and(max-width: 904px) {
  .left {
    margin-left: 10px;
    height: 90px;
    line-height: 90px;
    font-weight: 900;
    font-size: 24px;
    color: $black;
  }
  .pcRight {
    display: none;
  }
  .phRight {
    > svg {
      height: 90px;
      margin-right: 10px;
    }
  }
  .phShow {
    // display: none;
    li {
      margin-bottom: 10px;
    }
    ul {
      ul {
        margin-top: 20px;
      }
      li {
        div {
          text-decoration: none;
          text-transform: uppercase;
          color: $black;
        }
      }
    }
  }
}
</style>