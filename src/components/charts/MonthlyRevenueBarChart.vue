<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Revenue (IDR)',
      data: [
        25000000, 45000000, 50000000, 60000000, 35000000, 45000000, 80000000, 70000000, 50000000,
        65000000, 50000000, 75000000,
      ],
      backgroundColor: '#71accc',
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}
</script>

<template>
  <div class="w-full h-80">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
