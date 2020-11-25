<template>
    <div class="portals">
        <navbar></navbar>
        <br>
        <h1 class="headline">Portals</h1>
        <br>
        <div class="content">
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
    .content{
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
    }
    .small-box{
        background-color: rgb(65, 105, 225);
        width: 16vw;
        min-width: 140px;
        height: 20vh;
        object-fit: cover;
        border: none;
        border-radius: 3px;
        box-shadow: 1.8px 2px 3px rgb(0, 0, 0);
        margin: 0.5rem;
    }
    .big-box{
        background-color: rgba(123, 134, 226, 0.6);
        min-width: 40vw;
        min-height: 20vh;
        border: none;
        border-radius: 4px;
        text-align: start;
        padding: 8px;
        padding-right: 2vh;
        margin: 0.5rem;
        margin-left: 2vw;
        cursor: pointer;
    }
    .big-box:hover{
        box-shadow: 1.8px 2px 3px rgb(0, 0, 0);
    }
    .project{
        max-width: 60vw;
        min-width: 360px;
        margin-top: 1vh;
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgb(37, 65, 117);
        border: none;
        border-radius: 4px;
        box-shadow: 3px 4px 8px rgb(34, 34, 34);
    }
</style>