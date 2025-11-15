<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/utils/auth'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  const success = login(email.value, password.value)

  if (success) {
    router.replace({ name: 'Dashboard' })
  } else {
    error.value = 'Invalid email or password!'
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col justify-center items-center px-4 py-8">
    <div class="w-full max-w-md">
      <div class="flex justify-center mb-4">
        <span class="px-4 py-1 bg-[#71accc] text-white font-semibold rounded-lg">
          Dashboard Login
        </span>
      </div>
      <h2 class="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Sign in to your account
      </h2>

      <p
        v-if="error"
        class="text-white font-semibold text-center p-2 rounded-lg bg-red-500 text-sm mb-3"
      >
        {{ error }}
      </p>

      <div class="rounded-2xl p-6 md:p-8 shadow-xl border bg-[#e5f6ff] border-white/20">
        <form @submit.prevent="handleLogin" method="POST" class="space-y-6">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-black">Email address</label>
            <div class="mt-2">
              <input
                v-model="email"
                id="email"
                type="email"
                name="email"
                required
                autocomplete="email"
                class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus :ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-black">Password</label>
              <div class="text-sm">
                <a class="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="password"
                id="password"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                class="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#71accc] focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
