<script setup lang="ts">
import { ref, computed } from 'vue'
import DownLogo from '../assets/images/logo/down.png'

import HeaderBar from '@/layouts/HeaderBar.vue'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const selectedRole = ref('all')

const users = ref<User[]>([
  { id: 1, name: 'Daffa Fachreza', email: 'daffa@example.com', role: 'Manager', status: 'Active' },
  { id: 2, name: 'Aulia Azzahra', email: 'aulia@example.com', role: 'Manager', status: 'Active' },
  { id: 3, name: 'Naufal Akbar', email: 'naufal@example.com', role: 'User', status: 'Active' },
  { id: 4, name: 'Siti Marlina', email: 'siti@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Rizky Putra', email: 'rizky@example.com', role: 'User', status: 'Active' },
  { id: 6, name: 'Dewi Lestari', email: 'dewi@example.com', role: 'User', status: 'Active' },
  { id: 7, name: 'Fajar Ramadhan', email: 'fajar@example.com', role: 'User', status: 'Active' },
  { id: 8, name: 'Nadia Zahra', email: 'nadia@example.com', role: 'Admin', status: 'Active' },
  { id: 9, name: 'Yoga Saputra', email: 'yoga@example.com', role: 'User', status: 'Active' },
  {
    id: 10,
    name: 'Melani Putri',
    email: 'melani@example.com',
    role: 'User',
    status: 'Active',
  },
  { id: 11, name: 'Taufik Hidayat', email: 'taufik@example.com', role: 'User', status: 'Active' },
  { id: 12, name: 'Rara Puspita', email: 'rara@example.com', role: 'Admin', status: 'Active' },
  { id: 13, name: 'Bima Satya', email: 'bima@example.com', role: 'User', status: 'Active' },
  { id: 14, name: 'Raisa Andini', email: 'raisa@example.com', role: 'User', status: 'Active' },
  { id: 15, name: 'Fadhil Maulana', email: 'fadhil@example.com', role: 'User', status: 'Active' },
])

const searchValue = ref('')
const sortColumn = ref<keyof User>('name')
const sortOrderAsc = ref(true)
const rowsLimit = 5
const currentPage = ref(0)

const filteredUsers = computed(() => {
  let rows = users.value

  if (searchValue.value) {
    const keyword = searchValue.value.toLowerCase()
    rows = rows.filter((u) =>
      Object.values(u).some((v) => v.toString().toLowerCase().includes(keyword)),
    )
  }

  if (selectedRole.value !== 'all') {
    rows = rows.filter((u) => u.role === selectedRole.value)
  }

  return rows
})

const sortedUsers = computed(() => {
  return [...filteredUsers.value].sort((a, b) => {
    const col = sortColumn.value

    if (typeof a[col] === 'number') {
      return sortOrderAsc.value
        ? (a[col] as number) - (b[col] as number)
        : (b[col] as number) - (a[col] as number)
    }

    return sortOrderAsc.value
      ? a[col].toString().localeCompare(b[col].toString())
      : b[col].toString().localeCompare(a[col].toString())
  })
})

const totalPage = computed(() => Math.ceil(sortedUsers.value.length / rowsLimit))

// 📄 Pagination
const paginatedRows = computed(() => {
  const start = currentPage.value * rowsLimit
  return sortedUsers.value.slice(start, start + rowsLimit)
})

const sortBy = (column: keyof User) => {
  if (sortColumn.value === column) {
    sortOrderAsc.value = !sortOrderAsc.value
  } else {
    sortColumn.value = column
    sortOrderAsc.value = true
  }
}

const nextPage = () => {
  if (currentPage.value < totalPage.value - 1) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 0) currentPage.value--
}

const selectPage = (page: number) => {
  currentPage.value = page
}
</script>

<template>
  <div class="flex min-h-screen bg-white">
    <div class="flex-1">
      <HeaderBar />

      <div class="max-w-6xl mx-auto py-10">
        <h1 class="text-2xl font-bold">Active Users</h1>

        <div class="flex justify-between items-center mt-4 mb-4 gap-4">
          <input
            v-model="searchValue"
            type="text"
            placeholder="Search..."
            class="border px-3 py-2 rounded-md w-60"
          />

          <div class="relative">
            <select
              v-model="selectedRole"
              class="border px-3 py-2 pr-10 rounded-md appearance-none"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>

            <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <img :src="DownLogo" alt="Logo" class="w-6.5 h-6.5" />
            </span>
          </div>
        </div>

        <div class="overflow-x-auto shadow-xl rounded-md">
          <table class="w-full text-left">
            <thead class="bg-[#71accc]">
              <tr>
                <th class="p-3">ID</th>

                <th class="p-3 cursor-pointer" @click="sortBy('name')">
                  Name
                  <span v-if="sortColumn === 'name'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 cursor-pointer" @click="sortBy('email')">
                  Email
                  <span v-if="sortColumn === 'email'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 cursor-pointer" @click="sortBy('role')">
                  Role
                  <span v-if="sortColumn === 'role'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 cursor-pointer" @click="sortBy('status')">
                  Status
                  <span v-if="sortColumn === 'status'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="row in paginatedRows" :key="row.id" class="hover:bg-[#e5f6ff]">
                <td class="p-3">{{ row.id }}</td>
                <td class="p-3">{{ row.name }}</td>
                <td class="p-3">{{ row.email }}</td>
                <td class="p-3">{{ row.role }}</td>
                <td class="p-3">{{ row.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-center gap-2 mt-4">
          <button class="px-3 py-1 border rounded" :disabled="currentPage === 0" @click="prevPage">
            Prev
          </button>

          <button
            v-for="n in totalPage"
            :key="n"
            class="px-3 py-1 border rounded"
            :class="{ 'bg-black text-white': currentPage === n - 1 }"
            @click="selectPage(n - 1)"
          >
            {{ n }}
          </button>

          <button
            class="px-3 py-1 border rounded"
            :disabled="currentPage === totalPage - 1"
            @click="nextPage"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
