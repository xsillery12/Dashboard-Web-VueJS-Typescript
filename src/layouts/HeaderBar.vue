<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BellLogo from '@/assets/images/logo/bell.png'

const router = useRouter()
const showLogoutModal = ref(false)

const confirmLogout = () => {
  localStorage.removeItem('token')
  router.push({ name: 'Login' })
}
</script>

<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-6 px-4 sm:px-8 bg-white border-b border-gray-300"
  >
    <div>
      <h1 class="text-2xl font-semibold text-gray-800">Welcome, Super Admin!</h1>
      <p class="text-sm font-semibold text-gray-500">Have a great day and stay healthy!</p>
    </div>

    <div class="flex items-center sm:space-x-4 gap-3 sm:gap-4">
      <button
        class="relative w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-100"
      >
        <img :src="BellLogo" alt="Bell" class="w-6.5 h-6.5" />
        <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        class="w-10 h-10 rounded-full object-cover"
      />

      <button
        @click="showLogoutModal = true"
        class="flex items-center px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold text-white"
      >
        Logout
      </button>
    </div>
  </div>

  <div
    v-if="showLogoutModal"
    class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div class="bg-[#e5f6ff] rounded-xl p-6 shadow-lg w-80">
      <h2 class="text-lg font-semibold">Are you sure?</h2>
      <p class="text-gray-600 mt-2">Do you really want to logout?</p>

      <div class="flex justify-end space-x-3 mt-6">
        <button
          class="px-4 py-2 bg-white text-black rounded-lg hover:bg-black hover:text-white"
          @click="showLogoutModal = false"
        >
          Cancel
        </button>

        <button
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
          @click="confirmLogout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
