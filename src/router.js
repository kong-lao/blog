import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import RoutineOfTheDance from "./views/storys/RoutineOfTheDance.vue";
import SaySomething from "./views/works/SaySomething.vue";
import SeeAgain from "./views/works/SeeAgain.vue";
import BigFish from "./views/works/BigFish.vue";
import DanceTroupe from "./views/storys/DanceTroupe.vue";
import ChasingLight from "./views/works/ChasingLight.vue";
import Cool from "./views/works/Cool.vue";
import SportsMeeting from "./views/storys/SportsMeeting.vue";
import Wind from "./views/works/Wind.vue";

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
      path: "/storys/RoutineOfTheDance",
      name: "routineofthedance",
      component: RoutineOfTheDance
    },
    {
      path: "/works/SaySomething",
      name: "saysomething",
      component: SaySomething
    },
    {
      path: "/works/SeeAgain",
      name: "seeagain",
      component: SeeAgain
    },
    {
      path: "/works/BigFish",
      name: "bigfish",
      component: BigFish
    },
    {
      path: "/storys/DanceTroupe",
      name: "dancetroupe",
      component: DanceTroupe
    },
    {
      path: "/works/ChasingLight",
      name: "chasinglight",
      component: ChasingLight
    },
    {
      path: "/works/Cool",
      name: "cool",
      component: Cool
    },
    {
      path: "/storys/SportsMeeting",
      name: "sportsmeeting",
      component: SportsMeeting
    },
    {
      path: "/works/Wind",
      name: "wind",
      component: Wind
    }
  ]
});
