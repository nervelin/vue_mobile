import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// routes是项目的路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    // name: 'layout',有默认路由就无需设置name
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // path为空，为默认路由，有且只有一个
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
