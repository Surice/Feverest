<template>
    <div class="portals">
        <navbar></navbar>
        <br>
        <h1 class="headline">Portals</h1>
        <br>
        <div class="project">
            <img src="./../../assets/placeholder.jpg" class="small-box">
            <router-link to="/" class="big-box" tag="button">
                <h4>User Portal</h4>
                <p>
                    
                </p>
            </router-link>
        </div>
        <div class="project">
            <img src="./../../assets/placeholder.jpg" class="small-box">
            <router-link to="/" class="big-box" tag="button">
                <h4>DEV Portal</h4>
                <p>

                </p>
            </router-link>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/header.vue'

export default {
    name: 'Portals',
    components: {
        navbar
    }
}
</script>
<style scoped>
    .small-box{
        background-color: royalblue;
        width: 16vw;
        height: 20vh;
        object-fit: cover;
        border: none;
        border-radius: 3px;
        box-shadow: 1.8px 1.2px 3px rgb(0, 0, 0);
    }
    .big-box{
        background-color: slateblue;
        width: 40vw;
        height: 20vh;
        border: none;
        border-radius: 4px;
        text-align: start;
        padding: 8px;
        padding-right: 2vh;
    }
    .project{
        width: 68vw;
        margin-top: 5vh;
        margin-left: 32vh;
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
    }
</style>