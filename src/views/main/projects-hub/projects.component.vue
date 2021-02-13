<template>
    <div class="projects">
        <navbar></navbar>
        <br>
        <h1 class="headline">Projects</h1>
        <br>
        <div class="content">
            <div class="project">
                <img src="@/assets/free-games_icon.png" class="small-box">
                <router-link to="/project/free_Games" class="big-box" tag="button">
                    <h4>Free Games</h4>
                    <p>
                    an API who displays all the currently free games
                    from different games suppliers
                    </p>
                </router-link>
            </div>
            <div class="project">
                <img src="@/assets/acc-assistant-logo.jpg" class="small-box">
                <router-link to="/project/acc_helper" class="big-box" tag="button">
                    <h4>Fuel Calculator</h4>
                    <p>
                        an assistant to calculate the required Fuel for a Race
                        and the required boxstops
                    </p>
                </router-link>
            </div>
            <div class="project">
                <img src="@/assets/mc_screen_crafting.png" class="small-box">
                <router-link to="/project/mc_c_guide" class="big-box" tag="button">
                    <h4>Mincraft Crafting Assistant</h4>
                    <p>
                        a Calculator for multiple Craftingrecipes in
                        Minecraft modpacks and Vanilla
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script src="./projects.component.js"></script>
<style scoped src="./projects.component.css"></style>