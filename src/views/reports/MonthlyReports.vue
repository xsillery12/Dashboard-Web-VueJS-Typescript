<script lang="ts">
import { defineComponent } from 'vue'
import MonthlyRevenueBarChart from '@/components/charts/MonthlyRevenueBarChart.vue'
import BestSellingPieChart from '@/components/charts/BestSellingPieChartMonthly.vue'

import HeaderBar from '@/layouts/HeaderBar.vue'

export default defineComponent({
  components: {
    MonthlyRevenueBarChart,
    BestSellingPieChart,
    HeaderBar,
  },
})
</script>

<template>
  <div class="flex min-h-screen bg-white">
    <div class="flex-1">
      <HeaderBar />

      <div class="px-8 py-6 bg-white">
        <h1 class="text-2xl font-bold">Monthly Reports</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        <div class="bg-[#e5f6ff] p-6 rounded-xl shadow-xl">
          <h2 class="text-lg font-bold mb-7">Monthly Revenue</h2>
          <MonthlyRevenueBarChart />
        </div>

        <div class="bg-[#e5f6ff] p-6 rounded-xl shadow-xl">
          <h2 class="text-lg font-bold mb-7">Best Selling Products</h2>
          <BestSellingPieChart />
        </div>
      </div>
    </div>
  </div>
</template>
