import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import HomePage from '@/views/HomePage.vue';
import ViewAnime from '@/views/ViewAnime.vue';
import About from '@/views/About.vue';
import Anime from '@/views/activities/Anime.vue';
import News from '@/views/activities/News.vue';
import ViewNews from '@/views/activities/ViewNews.vue';
import EditNews from '@/views/activities/EditNews.vue';
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
        path: '/activities',
        name: 'Activities',
        children: [
          {
            path: '/anime',
            name: 'Anime',
            component: Anime,
          },
          {
            path: '/news',
            name: 'News',
            component: News,
          },
        ]
      },
      {
        path: '/view-anime/:id',
        name: 'ViewAnime',
        props: true,
        component: ViewAnime,
      },
      {
        path: '/view-news/:id',
        name: 'ViewNews',
        props: true,
        component: ViewNews,
      },
      {
        path: '/view-news/edit/:id',
        name: 'EditNews',
        props: true,
        component: EditNews,
      }
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
