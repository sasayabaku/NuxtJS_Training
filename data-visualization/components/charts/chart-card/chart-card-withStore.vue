<template>
    <v-card min-width="80%">
        <v-card-title>
            Data from Vue Store
        </v-card-title>
        <v-card-text class="chart-container"> 
            <Chart v-if="loaded" :chartData="chartData" :options="options"/>
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
            loaded: true,

            chartData: {
                labels: this.$store.state.charts_store.simple.label,
                datasets: [{
                    label: "sample",
                    data: this.$store.state.charts_store.simple.data,
                    fill: true,
                    backgroundColor: 'rgba(235, 70, 52, 0.2)',
                    borderColor: '#eb4634',
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