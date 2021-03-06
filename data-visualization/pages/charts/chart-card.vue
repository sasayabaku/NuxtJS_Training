<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="4">
                <chartCard />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4">
                <storeChartCard />
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4">
                <outsideAPIChartCard />
            </v-col> 
        </v-row>
    </div>
</template>
<script>
import chartCard from '~/components/charts/chart-card/chart-card.vue';
import storeChartCard from '~/components/charts/chart-card/chart-card-withStore.vue';
import outsideAPIChartCard from '~/components/charts/chart-card/chart-card-withAPI.vue';
export default {
    components: {
        chartCard,
        storeChartCard,
        outsideAPIChartCard
    }
}
</script>