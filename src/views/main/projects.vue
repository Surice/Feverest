<template>
    <div class="projects">
        <navbar></navbar>
        <br>
        <h1 class="headline">Projects</h1>
        <br>
        <div class="project">
            <img src="./../../assets/placeholder.jpg" class="small-box">
            <router-link to="/free_Games" class="big-box" tag="button">
                <h4>Free Games</h4>
                <p>
                  an API who displays all the currently free games
                  from different games suppliers  
                </p>
            </router-link>
        </div>
        <div class="project">
            <img src="./../../assets/acc-assistant-logo.jpg" class="small-box">
            <router-link to="/acc_helper" class="big-box" tag="button">
                <h4>Assetto Corsa Competizione Assistant</h4>
                <p>
                    an assistant to calculate the required Fuel for a Race
                    and the required boxstops
                </p>
            </router-link>
        </div>
        <div class="project">
            <img src="./../../assets/mc_screen_crafting.png" class="small-box">
            <router-link to="/mc_c_guide" class="big-box" tag="button">
                <h4>Mincraft Crafting Assistant</h4>
                <p>
                    
                </p>
            </router-link>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/header.vue'

export default {
    name: 'Projects',
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