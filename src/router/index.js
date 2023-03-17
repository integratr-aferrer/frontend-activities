import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import HomePage from '@/views/HomePage.vue';
import ViewAnime from '@/views/ViewAnime.vue';
import About from '@/views/About.vue';
import Activities from '@/views/Activities.vue';
import Login from '@/views/auth/Login.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    redirect: Home,
    beforeEnter: [redirectToLogin],
    children: [
      {
        path: '/home',
        name: 'Home',
        alias: '/',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/activities/:id',
        name: 'Activities',
        props: true,
        component: Activities,
      },
      {
        path: '/view-anime/:id',
        name: 'ViewAnime',
        props: true,
        component: ViewAnime,
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { restrictAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// global navigation guard
router.beforeEach((to, from, next) => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if(to.matched.some((result) => result.meta.restrictAuth) && !!currentUser) {
     return next('/')
  } next();
});

// navigation guard functions
function redirectToLogin(to) {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser && to.name != 'Login') {
    return router.push({name: 'Login'})
  }
}

export default router
// (to.matched.some((result) => result.meta.requiresAuth))
