import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import NotFoundView from '../views/NotFoundView'
import OrderView from '../views/OrderView'
import ShoppingView from '../views/ShoppingView'
import UserView from '../views/UserView'
import GoodsDetailView from '../views/GoodsDetailView'

const routes = [
  {
    path: '/eshop/home',
    name: 'home',
    component: HomeView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/eshop/login',
    name: 'login',
    component: LoginView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/eshop/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/eshop/shopping',
    name: 'shopping',
    component: ShoppingView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/eshop/order',
    name: 'order',
    component: OrderView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/eshop/user',
    name: 'user',
    component: UserView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/eshop/404',
    name: '404',
    component: NotFoundView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/eshop/goods',
    name: 'goods',
    component: GoodsDetailView,
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/eshop/:catchAll(.*)',
    redirect: '/404/',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
