import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Weekly from '@/views/reports/WeeklyReports.vue'
import Monthly from '@/views/reports/MonthlyReports.vue'
import Users from '@/views/Users.vue'

const routes = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login,
      },
    ],
  },
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'Users',
        name: 'Users',
        component: Users,
      },
      { path: 'reports/WeeklyReports', name: 'WeeklyReports', component: Weekly },
      { path: 'reports/MonthlyReports', name: 'MonthlyReports', component: Monthly },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token')

  if (!isLoggedIn && to.name !== 'Login') {
    return next({ name: 'Login' })
  }

  if (isLoggedIn && to.name === 'Login') {
    return next({ name: 'Dashboard' })
  }

  next()
})

export default router
