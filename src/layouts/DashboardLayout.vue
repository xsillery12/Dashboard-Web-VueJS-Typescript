<script setup lang="ts">
import { ref } from 'vue'
import DashboardLogo from '../assets/images/logo/dashboard.png'
import ReportsLogo from '../assets/images/logo/reports.png'
import UsersLogo from '../assets/images/logo/users.png'
import WebLogo from '../assets/images/logo/web-logo.png'

defineOptions({ name: 'DashboardLayout' })

const sidebarOpen = ref(false)

const showReports = ref(false)
</script>

<template>
  <div class="flex min-h-screen">
    <div
      :class="[
        'bg-[#e5f6ff] w-64 fixed md:static inset-y-0 left-0 transform md:translate-x-0 transition-transform duration-300 z-50',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="w-full flex justify-center pb-0">
        <a href="/" class="block">
          <img :src="WebLogo" alt="Logo" class="max-w-[180px] h-auto" />
        </a>
      </div>

      <li class="py-1">
        <div>
          <h3 class="mx-6 mb-2 text-sm font-bold text-black uppercase tracking-widest">
            Main Menu
          </h3>
        </div>
      </li>

      <li class="px-5 py-1">
        <router-link
          to="/"
          class="group flex items-center px-4 py-3 rounded-xl hover:bg-[#71accc] hover:text-white transition font-semibold"
        >
          <img :src="DashboardLogo" alt="Logo" class="w-6.5 h-6.5 transition group-hover:invert" />
          <span class="ml-3">Dashboard</span>
        </router-link>
      </li>

      <li class="px-5 py-1">
        <button
          type="button"
          @click="showReports = !showReports"
          class="group flex items-center w-full justify-between px-4 py-3 rounded-xl hover:bg-[#71accc] hover:text-white transition font-semibold"
        >
          <div class="flex items-center">
            <img :src="ReportsLogo" alt="Logo" class="w-6.5 h-6.5 transition group-hover:invert" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Reports</span>
          </div>

          <svg
            :class="['w-5 h-5 transition-transform', showReports ? 'rotate-180' : 'rotate-0']"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke="currentColor" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>

        <ul v-show="showReports" class="py-2 space-y-2 transition-all">
          <li>
            <router-link
              to="/reports/WeeklyReports"
              class="pl-10 flex items-center px-4 py-2 rounded-xl hover:bg-[#71accc] hover:text-white transition font-semibold"
            >
              Weekly Reports
            </router-link>
          </li>
          <li>
            <router-link
              to="/reports/MonthlyReports"
              class="pl-10 flex items-center px-4 py-2 rounded-xl hover:bg-[#71accc] hover:text-white transition font-semibold"
            >
              Monthly Reports
            </router-link>
          </li>
        </ul>
      </li>

      <li class="px-5 py-1">
        <router-link
          to="/Users"
          class="group flex items-center px-4 py-3 rounded-xl hover:bg-[#71accc] hover:text-white transition font-semibold"
        >
          <img :src="UsersLogo" alt="Logo" class="w-6.5 h-6.5 transition group-hover:invert" />
          <span class="ml-3">Users</span>
        </router-link>
      </li>
    </div>

    <div class="flex-1">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
        @click="sidebarOpen = false"
      ></div>
      <button class="md:hidden p-4" @click="sidebarOpen = true">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
