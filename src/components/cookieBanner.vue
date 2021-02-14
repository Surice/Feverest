<template>
    <cookie-law theme="dark-lime" position="bottom" transitionName="slideFromBottom" v-on:accept="accepted()">
        <div slot-scope="props" class="banner">
            <p>
                This website uses cookies to ensure that you get the best experience on our website. <br>
                if you do not accept the site may not work correctly.
                <router-link style="text-decoration: underline" to="impressum">Learn more</router-link>
            </p>
            <div>
                <button class="Cookie__button" @click="props.accept">Got It!</button>
                <!-- <button class="Cookie__button--decline" @click="props.close">Decline</button> -->
            </div>
        </div>
    </cookie-law>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'

    export default {
        name: 'cookie-banner',
        components: {
            CookieLaw
        },
        mounted(){
        },
        methods: {
            accepted(){
            }
        }
    }
</script>
<style scoped>
    .banner{
        display: flex;
        justify-content: space-between;
        width: 100vw;
    }
    .Cookie__button{
        margin-right: 15px;
    }
</style>