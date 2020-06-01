import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '番茄鐘'
    }
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      title: '番茄鐘 | 清單'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      title: '番茄鐘 | 設定'
    }
  }, {
    path: '/historys',
    name: 'Historys',
    component: () => import(/* webpackChunkName: "historys" */ '../views/Historys.vue'),
    meta: {
      title: '番茄鐘 | 歷史紀錄'
    }
  }, {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      title: '番茄鐘 | 404'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

router.afterEach((to, from) => {
  document.title = to.meta.title
})
