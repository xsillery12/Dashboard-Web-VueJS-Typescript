<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Dummy data
const bestSellingProducts = [
  { product: 'iPhone 15 Pro', qty: 240 },
  { product: 'Air Max Runner', qty: 960 },
  { product: 'PlayStation 5', qty: 540 },
  { product: 'Atomic Habits', qty: 720 },
]

// Chart Data
const chartData = {
  labels: bestSellingProducts.map((p) => p.product),
  datasets: [
    {
      data: bestSellingProducts.map((p) => p.qty),
      backgroundColor: ['#6366f1', '#f59e0b', '#10b981', '#ef4444'],
    },
  ],
}

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}
</script>

<template>
  <div class="w-full h-72">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>
