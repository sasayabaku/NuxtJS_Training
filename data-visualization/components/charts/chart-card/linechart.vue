<script>
import { Line } from 'vue-chartjs';
export default {
    extends: Line,
    name: 'chart',
    props: ['chartData', 'options'],
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
</script>