<template>
    <v-card min-width="80%">
        <v-card-title>
            Simple Chart
        </v-card-title>
        <v-card-text class="chart-container"> 
            <Chart :chartData="chartData" :options="options"/>
        </v-card-text>
    </v-card>
</template>

<script>
import Chart from './linechart.vue';
export default {
    components: {
        Chart
    },
    data() {
        return {
            chartData: {
                labels: ['A', 'B', 'C'],
                datasets: [{
                    label: "sample",
                    data: [100, 150, 300],
                    fill: true,
                    backgroundColor: 'rgba(83, 224, 156, 0.2)',
                    borderColor: '#53e09c'
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true
                },
            }
        }
    },
}
</script>