<template>
    <div class="container">
        <div class="alert">
            <vs-alert shadow>
                API key is <b>{{ test }}</b>. From private Runtime Config. <br />
                Let's check nuxt.config.js !
            </vs-alert>    
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $config }) {
        console.log($config);
        return { test: $config.my_token }
    }
}
</script>

<style>
.container {
    margin: 4rem 10rem;
    display: flex;
    justify-content: center;
}

.alert {
    min-width: 80%;
}
</style>