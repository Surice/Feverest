<template>
    <div style="background: white">
        <h1>Navigator Data:</h1>
        <br>
        <p>{{ userData }}</p>
    </div>
</template>

<script>
export default {
    name: "Test",
    data: function() {
        return {
            userData: {},
            types: ["appCodeName", "appName", "appVersion", "cookieEnabled", "geolocation", "language", "onLine", "platform", "product", "userAgent"]
        }
    },
    beforeMount() {
        this.types.forEach(e => {
            this.userData[e] = navigator[e];
        });
    }
}
</script>

<style scoped>
    p{
        word-wrap: break-word;
    }
</style>