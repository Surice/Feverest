<template>
    <div class="navbar-me">
        <router-link to="/home" class="nav-logo"><h2 class="nav-txt">Feverest</h2></router-link>

        <div class="navbar-el-div">
            <div>
            <router-link to="/home" class="navbar-el">Home</router-link>
            </div>
            <div>
            <router-link to="/intro" class="navbar-el">Introduciton</router-link>
            </div>
            <div class="dropdown">
                <router-link to="/projects" class="navbar-el navbar-el-router">Projects <i class="fas fa-chevron-down"></i></router-link>
                <div class="dropdown-content">
                    <router-link to="/project/free_Games">Free Games</router-link>
                    <router-link to="/project/acc_helper">Fuel Calculator</router-link>
                    <router-link to="/project/mc_c_guide">MC Crafting Guide</router-link>
                </div>
            </div>
            <div class="dropdown">
                <router-link to="/portals" class="navbar-el navbar-el-router">Portals <i class="fas fa-chevron-down"></i></router-link>
                <div class="dropdown-content">
                    <router-link to="/">User-Portal</router-link>
                    <router-link to="/dev-portal/home">DEV-Portal</router-link>
                </div>
            </div>
            <div>    
            <router-link to="/impressum" class="navbar-el">Impressum</router-link>
            </div>
        </div>

        <div class="navbar-el-dropdown">
            <button v-on:click="dropdown" class="navbar-el navbar-menu">Menu <i class="fas fa-chevron-down"></i></button>
            <div id="dropdown-me-content" class="dropdown-me-content">
                <router-link to="/home">Home</router-link>
                <router-link to="/intro">Introduciton</router-link>
                <router-link to="/projects">Projects</router-link>
                <router-link to="/portals">Portals</router-link>
                <router-link to="/impressum">Impressum</router-link>
            </div>
        </div>
    </div>
</template>

<script src="./header.component.js"></script>
<style scoped src="./header.component.css"></style>