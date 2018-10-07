import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/views/MainPage';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage,
      meta: {
        title: 'Main page',
      },
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import(/* webpackChunkName: "basket" */ '@/views/BasketPage'),
      meta: {
        title: 'Basket',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
