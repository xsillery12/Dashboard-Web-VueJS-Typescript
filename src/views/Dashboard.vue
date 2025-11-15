<script setup lang="ts">
import { ref, computed } from 'vue'
import DownLogo from '../assets/images/logo/down.png'

import HeaderBar from '@/layouts/HeaderBar.vue'

interface Product {
  id: number
  Category: string
  Company: string
  Product: string
  Approved: string
  Price: number
}

const selectedRole = ref('all')

const products = ref<Product[]>([
  {
    id: 1,
    Category: 'Electronics',
    Company: 'Apple',
    Product: 'iPhone 15 Pro',
    Approved: 'Admin 1',
    Price: 18499000,
  },
  {
    id: 2,
    Category: 'Clothing',
    Company: 'Nike',
    Product: 'Air Max Runner',
    Approved: 'Admin 2',
    Price: 1799000,
  },
  {
    id: 3,
    Category: 'Home Appliances',
    Company: 'Samsung',
    Product: 'Smart Refrigerator',
    Approved: 'Admin 3',
    Price: 12999000,
  },
  {
    id: 4,
    Category: 'Furniture',
    Company: 'IKEA',
    Product: 'Malm Desk',
    Approved: 'Admin 1',
    Price: 2499000,
  },
  {
    id: 5,
    Category: 'Accessories',
    Company: 'Logitech',
    Product: 'MX Master 3S',
    Approved: 'Admin 2',
    Price: 1499000,
  },
  {
    id: 6,
    Category: 'Gaming',
    Company: 'Sony',
    Product: 'PlayStation 5',
    Approved: 'Admin 3',
    Price: 9699000,
  },
  {
    id: 7,
    Category: 'Books',
    Company: 'Gramedia',
    Product: 'Atomic Habits',
    Approved: 'Admin 1',
    Price: 120000,
  },
  {
    id: 8,
    Category: 'Beauty',
    Company: 'Skintific',
    Product: 'Mugwort Moisturizer',
    Approved: 'Admin 2',
    Price: 179000,
  },
])

const searchValue = ref('')
const sortColumn = ref<keyof Product>('Price')
const sortOrderAsc = ref(true)
const rowsLimit = 5
const currentPage = ref(0)

const filteredProducts = computed(() => {
  let rows = products.value

  if (searchValue.value) {
    const keyword = searchValue.value.toLowerCase()
    rows = rows.filter((p) =>
      Object.values(p).some((value) => value?.toString().toLowerCase().includes(keyword)),
    )
  }

  if (selectedRole.value !== 'all') {
    rows = rows.filter((p) => p.Approved === selectedRole.value)
  }

  return rows
})

const sortedProducts = computed(() => {
  return [...filteredProducts.value].sort((a, b) => {
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

const totalPage = computed(() => Math.ceil(sortedProducts.value.length / rowsLimit))

const paginatedRows = computed(() => {
  const start = currentPage.value * rowsLimit
  const end = start + rowsLimit
  return sortedProducts.value.slice(start, end)
})

const sortBy = (column: keyof Product) => {
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

      <div class="px-4 sm:px-8 py-6">
        <h1 class="text-2xl font-bold">Summary</h1>
      </div>
      <div class="px-8 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 bg-[#e5f6ff] rounded-xl shadow-sm w-80 mx-1 sm:w-full">
          <h3 class="text-sm font-medium text-gray-500">Total Users</h3>
          <p class="mt-2 text-3xl font-bold text-gray-800">15</p>
          <p class="text-sm text-green-600 mt-1">+2% this month</p>
        </div>

        <div class="p-6 bg-[#e5f6ff] rounded-xl shadow-sm w-80 mx-1 sm:w-full">
          <h3 class="text-sm font-medium text-gray-500">Transaction</h3>
          <p class="mt-2 text-3xl font-bold text-gray-800">350</p>
          <p class="text-sm text-green-600 mt-1">+8% this month</p>
        </div>

        <div class="p-6 bg-[#e5f6ff] rounded-xl shadow-sm w-80 mx-1 sm:w-full">
          <h3 class="text-sm font-medium text-gray-500">Revenue</h3>
          <p class="mt-2 text-3xl font-bold text-gray-800">Rp50.000.000</p>
          <p class="text-sm text-red-600 mt-1">-23% this month</p>
        </div>

        <div class="p-6 bg-[#e5f6ff] rounded-xl shadow-sm w-80 mx-1 sm:w-full">
          <h3 class="text-sm font-medium text-gray-500">Pending Issues</h3>
          <p class="mt-2 text-3xl font-bold text-gray-800">14</p>
          <p class="text-sm text-yellow-600 mt-1">+2 pending</p>
        </div>
      </div>

      <div class="px-4 sm:px-8 py-6">
        <h1 class="text-2xl font-bold">Recent Transaction</h1>

        <div
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 mb-4 gap-4"
        >
          <input
            v-model="searchValue"
            type="text"
            placeholder="Search..."
            class="border px-3 py-2 w-60 rounded-md"
          />

          <div class="relative">
            <select
              v-model="selectedRole"
              class="border px-3 py-2 pr-10 rounded-md appearance-none"
            >
              <option value="all">All Roles</option>
              <option value="Admin 1">Admin 1</option>
              <option value="Admin 2">Admin 2</option>
              <option value="Admin 3">Admin 3</option>
            </select>

            <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <img :src="DownLogo" alt="Logo" class="w-6.5 h-6.5" />
            </span>
          </div>
        </div>

        <div class="overflow-x-auto rounded-md shadow-xl">
          <table class="w-full min-w-max text-left text-sm">
            <thead class="bg-[#71accc]">
              <tr>
                <th class="p-3 whitespace-nowrap">ID</th>

                <th class="p-3 whitespace-nowrap cursor-pointer" @click="sortBy('Category')">
                  Category
                  <span v-if="sortColumn === 'Category'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 whitespace-nowrap cursor-pointer" @click="sortBy('Company')">
                  Company
                  <span v-if="sortColumn === 'Company'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 whitespace-nowrap cursor-pointer" @click="sortBy('Product')">
                  Product
                  <span v-if="sortColumn === 'Product'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 whitespace-nowrap cursor-pointer" @click="sortBy('Price')">
                  Price
                  <span v-if="sortColumn === 'Price'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>

                <th class="p-3 whitespace-nowrap cursor-pointer" @click="sortBy('Approved')">
                  Approved By
                  <span v-if="sortColumn === 'Approved'">{{ sortOrderAsc ? '▲' : '▼' }}</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="row in paginatedRows" :key="row.id" class="hover:bg-[#e5f6ff]">
                <td class="p-3 whitespace-nowrap">{{ row.id }}</td>
                <td class="p-3 whitespace-nowrap">{{ row.Category }}</td>
                <td class="p-3 whitespace-nowrap">{{ row.Company }}</td>
                <td class="p-3 whitespace-nowrap">{{ row.Product }}</td>
                <td class="p-3 whitespace-nowrap">{{ row.Price }}</td>
                <td class="p-3 whitespace-nowrap">{{ row.Approved }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mt-4">
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
