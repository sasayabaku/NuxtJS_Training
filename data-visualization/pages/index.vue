<template>
  <div id="index_page">
    <v-row class="">
      <v-col cols="12" sm="12" md="6" lg="6" align="center">
        <v-card max-width="374">
          <v-img></v-img>
          <v-card-title>Create Graph Card component</v-card-title>
          <v-card-text>
            <div>VuetifyとChart.jsで、グラフカードコンポーネント作成</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn text color="red lighten-1" to="/charts/chart-card" nuxt>
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
