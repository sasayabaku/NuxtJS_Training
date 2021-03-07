<template>
  <div class="container">
    <div class="content-header">
        <h1>Title</h1>
    </div>
    
    <div class="card-gallary">
      <vs-row>
        <vs-col lg="4">
          <vs-card>
            <template #title>
              <h3>Private Runtime Config</h3>
            </template>
            <template #img>
              <img src="~/assets/key.jpg" />
            </template>
            <template #text>
              private runtime configから、変数を取得するサンプル
            </template>
            <template #interactions>
              <vs-button danger icon>
                <a href="/runtimeConfig">
                  <i class='bx bx-link'></i>
                </a>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat'></i>
                <span class="span">54</span>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  margin: 5rem 10rem;
  min-height: 100vh;
  display: block;
}
.content-header{
  display: flex;
  justify-content: center;
}

.card-gallary {
  display: block;
}

</style>