import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Main from '../components/Main.vue';
import ItemPage from '../components/ItemPage.vue';
import Register from '../components/Register.vue';
import Profile from '../components/Profile.vue';
import Shop from '../components/Shop.vue';
import Order from '../components/Order.vue';

const routes = [

    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/item/:item_id',
      name: 'item page',
      component: ItemPage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
