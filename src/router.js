import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import SBigFish from "./views/dance-storys/SBigFish.vue";
import SSaySomething from "./views/dance-storys/SSaySomething.vue";
import SWind from "./views/dance-storys/SWind.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/About",
      name: "about",
      component: About
    },
    {
      path: "/SBigFish",
      name: "sbigfish",
      component: SBigFish
    },
    {
      path: "/SSaySomething",
      name: "ssaysomething",
      component: SSaySomething
    },
    {
      path: "/SWind",
      name: "swind",
      component: SWind
    }
  ]
});
