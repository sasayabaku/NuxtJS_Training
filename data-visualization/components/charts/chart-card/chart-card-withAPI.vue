<template>
    <v-card min-width="80%">
        <v-card-title>
            Data from Outside API (Quandl) {{ test }}
        </v-card-title>
        <v-card-text class="chart-container"> 
            <Chart v-if="loaded" :chartData="chartData" :options="options"/>
            <v-progress-circular v-else-if="loaded!=true" indeterminate color="#53e09c" />
        </v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios';
import Chart from './linechart.vue';

export default {
    components: {
        Chart
    },
    data() {
        return {
            test: "",
            loaded: false,

            chartData: {
                labels: null,
                datasets: [{
                    label: "average value",
                    data: null,
                    fill: true,
                    backgroundColor: 'rgba(232, 229, 74, 0.2)',
                    borderColor: '#e8e54a',
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
    async created() {
        // アクセストークン削除
        const url = "https://www.quandl.com/api/v3/datasets/CHRIS/CME_NK2/data.json?api_key=" + this.$config.quandlKey;
        const response = await axios.get(url);
        
        const data = response.data.dataset_data.data;
        const last_7day = data.slice(0, 7).reverse();
        
        // // 直近7日の日付 + 終値
        const days = last_7day.map(item => item[0]);
        const last = last_7day.map(item => item[4]);

        await this.$set(this.chartData, 'labels', days);
        await this.$set(this.chartData.datasets[0], 'data', last);

        this.loaded = true;

    },
}
</script>