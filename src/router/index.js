import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ChangePassword from "../views/ChangePassword.vue";
import FindStep1 from "@/components/user/FindStep1.vue"
import FindStep2 from "@/components/user/FindStep2.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/",name: "LandingPage",component: LandingPage },
  { 
    path: "/find", 
    name: "ChangePassword",
    component: ChangePassword,
    // redirect:'/find/step1',
    children:[
      { path: "step1",name: "FindStep1",component: FindStep1 },
      { path: "step2",name: "FindStep2",component: FindStep2 },
    ]
  },
  // {
  //   path: "/test",
  //   component: RetrievePassword,
  //   children:[
  //     { path: "s1",component: test21 },
  //     { path: "s2",component: test22 },
  //     { path: "s3",component: test23 },
  //   ]
  // },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
